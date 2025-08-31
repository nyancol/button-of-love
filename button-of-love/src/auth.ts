import NextAuth from 'next-auth';
import { createSession } from '@/app/lib/session'
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { z } from 'zod';
import { authConfig } from './auth.config';
import { deleteSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@/app/generated/prisma';


const prisma = new PrismaClient();

async function getUser(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;

          const user = await getUser(username);
          if (!user) return null;

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          // if (passwordsMatch) return user
          await createSession(user.id)
          return user
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

export async function logout() {
  await deleteSession()
  redirect('/login')
}