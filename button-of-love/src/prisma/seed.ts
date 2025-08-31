import { randomUUID } from "crypto";
import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const user_1_id = randomUUID();
const user_2_id = randomUUID();
const user_3_id = randomUUID();
const relation_id = randomUUID();
const invitation_id = randomUUID();

const userData: Prisma.UserCreateInput[] = [
  {
    id: user_1_id,
    first_name: "Yann",
    last_name: "Colina",
    username: "nyancol",
    email: "yanncolina@gmail.com",
    birthdate: new Date("1990-01-01"),
    password: "password123",
  },
  {
    id: user_2_id,
    first_name: "Salma",
    last_name: "Chatoui",
    username: "schatoui",
    email: "salmachatoui@icloud.com",
    birthdate: new Date("1990-01-01"),
    password: "password123",
  },
  {
    id: user_3_id,
    first_name: "test",
    last_name: "test",
    username: "test",
    email: "test@icloud.com",
    birthdate: new Date("1990-01-01"),
    password: "password123",
  }
];

export async function main() {
  // Cleanup: delete all data in correct order due to foreign key constraints
  await prisma.loveCounter.deleteMany({});
  await prisma.relationMember.deleteMany({});
  await prisma.relation.deleteMany({});
  await prisma.relationInvitation.deleteMany({});
  await prisma.user.deleteMany({});
  
  // Create users
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  // Create an accepted invitation that resulted in a relationship
  const acceptedInvitation = await prisma.relationInvitation.create({
    data: {
      id: invitation_id,
      inviter_id: user_1_id,
      invited_user_id: user_2_id,
      status: "ACCEPTED"
    }
  });

  // Create the relation from the accepted invitation
  await prisma.relation.create({
    data: {
      id: relation_id,
      relation_invitation_id: invitation_id,
      members: {
        createMany: {
          data: [
            { user_id: user_1_id },
            { user_id: user_2_id },
          ]
        }
      },
      love_counters: {
        createMany: {
          data: [
            { from_user_id: user_1_id, count: 0, last_loveu_sent: new Date() },
            { from_user_id: user_2_id, count: 0, last_loveu_sent: new Date() }
          ]
        }
      }
    }
  });
}

main();