'use server';

import prisma from '@/tools/prisma';
import {
  UnauthorizedError,
  hashPassword,
  signToken,
  withResult,
} from '@/frontend/action_utils';
import type { ClientLoginInput, ClientLoginOutput, AccountRoleType } from '@/frontend/types/ClientLogin';

/**
 * Validates client credentials against account_user records.
 * Domain Rules:
 * - allowed_login_roles: ["CLIENT"]
 * - Password matched via hashPassword() against passwordHash
 * - Token issued with client ID and role
 */
export async function authenticateClient(
  input: ClientLoginInput
): Promise<ClientLoginOutput> {
  return withResult(async () => {
    const rawAccount = (input.account || '').trim();
    const rawPassword = input.password || '';

    if (!rawAccount || !rawPassword) {
      throw new UnauthorizedError('Please enter both your identifier and password.');
    }

    // 1. Search account by unique username or email
    const user = await prisma.accountUser.findFirst({
      where: {
        OR: [
          { username: rawAccount },
          { email: rawAccount.toLowerCase() },
        ],
      },
    });

    if (!user) {
      throw new UnauthorizedError('Invalid client credentials or unestablished folio access.');
    }

    // 2. Restrict to CLIENT role only as mandated by allowed_login_roles
    if (user.role !== 'CLIENT') {
      throw new UnauthorizedError('Access restricted to client commission portal accounts.');
    }

    // 3. Compare hashed password
    const hashed = hashPassword(rawPassword);
    if (user.passwordHash !== hashed) {
      throw new UnauthorizedError('Invalid client credentials or unestablished folio access.');
    }

    // 4. Issue token using user.id as principal
    const token = await signToken(user.id, user.role);

    return {
      token,
      userId: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role as AccountRoleType,
    };
  })();
}