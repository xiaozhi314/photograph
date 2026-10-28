'use server';

import prisma from '@/tools/prisma';
import {
  hashPassword,
  signToken,
  withResult,
  UnauthorizedError,
} from '@/backend/action_utils';
import type { CuratorLoginInput, CuratorLoginOutput, AccountRoleType } from '@/backend/types/AdminLogin';

/**
 * Curator Administrator Authentication
 * Business rule:
 * - Allowed roles: strictly CURATOR_ADMIN
 * - Finds account by matching either username or email
 * - Compares hashPassword(input.password) with account_user.passwordHash
 * - Verifies role === CURATOR_ADMIN
 * - Signs platform stateless JWT session with user id and role
 */
export async function loginCuratorAdmin(
  input: CuratorLoginInput
): Promise<CuratorLoginOutput> {
  return withResult(async () => {
    const rawAccount = (input.account || '').trim();
    const rawPassword = input.password || '';

    if (!rawAccount || !rawPassword) {
      throw new UnauthorizedError('Please enter both curator identifier and password');
    }

    // Lookup user by either unique username or email
    const user = await prisma.accountUser.findFirst({
      where: {
        OR: [
          { username: rawAccount },
          { email: rawAccount.toLowerCase() },
        ],
      },
    });

    if (!user) {
      throw new UnauthorizedError('Curator identifier not recognized in darkroom registry');
    }

    // Role check: Only CURATOR_ADMIN role is permitted to authenticate on backend portal
    if (user.role !== 'CURATOR_ADMIN') {
      throw new UnauthorizedError('Access restricted. Curator administrator privileges required');
    }

    // Verify hashed password
    const hashed = hashPassword(rawPassword);
    if (user.passwordHash !== hashed) {
      throw new UnauthorizedError('Invalid security credentials provided');
    }

    // Sign platform stateless JWT token bound to account ID and CURATOR_ADMIN role
    const token = await signToken(user.id, user.role);

    return {
      token,
      userId: user.id, // data-from: AccountUser-id
      username: user.username, // data-from: AccountUser-username
      email: user.email, // data-from: AccountUser-email
      fullName: user.fullName, // data-from: AccountUser-fullName
      role: user.role as AccountRoleType, // data-from: AccountUser-role
    };
  })();
}