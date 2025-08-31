import 'server-only'
 
import { cookies } from 'next/headers'
import {cache} from 'react';
import { decrypt } from '@/app/lib/session'
import { redirect } from 'next/navigation'
import postgres from 'postgres';
import { PrismaClient } from '@/app/generated/prisma';
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    redirect('/login')
  }
 
  return { isAuth: true, userId: session.userId }
})


const prisma = new PrismaClient();
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const getUser = cache(async () => {
  const session = await verifySession();
  const userId = session.userId;
  if (!session) return null;

  try {
    // TypeScript now knows what shape to expect
    const user = await prisma.user.findMany({
      where: { id: session.userId }
    });
    console.log('Fetched user:', user);
    return user[0];
  } catch (error) {
    console.log('Failed to fetch user');
    return null;
  }
});