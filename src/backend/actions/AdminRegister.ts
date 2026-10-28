'use server';

import prisma from '@/tools/prisma';
import {
  hashPassword,
  signToken,
  withResult,
} from '@/backend/action_utils';
import type { RegisterCuratorInput, RegisterCuratorOutput, CuratorRole } from '@/backend/types/AdminRegister';

/**
 * Curator administrative account creation Server Action.
 * 
 * Domain constraints & security rules:
 * 1. Strictly provisions authorized curatorial administrative staff with CURATOR_ADMIN role.
 * 2. Role is hardcoded on server side as CURATOR_ADMIN, avoiding client-driven elevation.
 * 3. Validates unique constraints on username and email before creation.
 * 4. Stores encrypted passwordHash computed via hashPassword().
 * 5. Issues administrative authentication token using signToken(user.id, user.role).
 */
export async function registerCuratorAdmin(
  input: RegisterCuratorInput
): Promise<RegisterCuratorOutput> {
  return withResult(async () => {
    const trimmedUsername = input.username.trim();
    const trimmedEmail = input.email.trim().toLowerCase();
    const trimmedFullName = input.fullName.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedFullName || !input.password) {
      throw new Error('All curatorial credential fields are required.');
    }

    if (input.password.length < 8) {
      throw new Error('Curatorial password must be at least 8 characters in length.');
    }

    // Check existing administrative username or email
    const existingUser = await prisma.accountUser.findFirst({
      where: {
        OR: [
          { username: trimmedUsername },
          { email: trimmedEmail },
        ],
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    if (existingUser) {
      if (existingUser.username.toLowerCase() === trimmedUsername.toLowerCase()) {
        throw new Error('The specified username is already registered in the curatorial registry.');
      }
      throw new Error('The specified email address is already bound to an existing account.');
    }

    const passwordHash = hashPassword(input.password);

    // Create curatorial admin account user record with fixed CURATOR_ADMIN role
    const newUser = await prisma.accountUser.create({
      data: {
        username: trimmedUsername,
        email: trimmedEmail,
        fullName: trimmedFullName,
        passwordHash,
        role: 'CURATOR_ADMIN',
      },
      select: {
        id: true,
        username: true,
        email: true,
        fullName: true,
        role: true,
      },
    });

    // Issue initial token with generated user ID
    const token = await signToken(newUser.id, newUser.role);

    return {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      fullName: newUser.fullName,
      role: newUser.role,
      token,
    };
  })();
}