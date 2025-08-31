import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const members = await prisma.relationMember.findMany();
  return Response.json(members);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const member = await prisma.relationMember.create({ data });
  return Response.json(member);
}
