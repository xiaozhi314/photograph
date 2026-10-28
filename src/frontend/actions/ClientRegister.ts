'use server';

import prisma from '@/tools/prisma';
import { hashPassword, withResult } from '@/frontend/action_utils';
import type { RegisterClientInput, RegisterClientOutput, AccountRoleType } from '@/frontend/types/ClientRegister';

/**
 * Register a prospective client with CLIENT role permissions.
 * Domain Rules:
 * - username: Unique username login credential
 * - email: Direct contact and notification email (unique)
 * - passwordHash: Encrypted user password credential using hashPassword()
 * - fullName: User legal or studio name
 * - role: Fixed to CLIENT on self-registration (no administrative/curator elevation allowed)
 */
export async function registerClient(input: RegisterClientInput): Promise<RegisterClientOutput> {
  return withResult(async () => {
    const trimmedUsername = input.username.trim().toLowerCase();
    const trimmedEmail = input.email.trim().toLowerCase();
    const trimmedFullName = input.fullName.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedFullName || !input.password) {
      throw new Error('All required credentials must be provided.');
    }

    if (input.password.length < 6) {
      throw new Error('Password must be at least 6 characters in length.');
    }

    // Check unique username collision
    const existingUser = await prisma.accountUser.findUnique({
      where: { username: trimmedUsername },
      select: { id: true },
    });
    if (existingUser) {
      throw new Error('The chosen username is already reserved by another studio member or client.');
    }

    // Check unique email collision
    const existingEmail = await prisma.accountUser.findUnique({
      where: { email: trimmedEmail },
      select: { id: true },
    });
    if (existingEmail) {
      throw new Error('An account registered with this direct email address already exists.');
    }

    const passwordHash = hashPassword(input.password);

    // Sole self-registerable role is CLIENT
    const newUser = await prisma.accountUser.create({
      data: {
        username: trimmedUsername,
        email: trimmedEmail,
        passwordHash,
        fullName: trimmedFullName,
        role: 'CLIENT',
      },
      select: {
        id: true,
        username: true,
        email: true,
        fullName: true,
        role: true,
      },
    });

    return {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      fullName: newUser.fullName,
      role: newUser.role as AccountRoleType,
      message: 'Client credentials established successfully. Directing to client sign-in.',
    };
  })();
}