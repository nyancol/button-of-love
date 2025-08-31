-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Relation" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relation_invitation_id" TEXT NOT NULL,

    CONSTRAINT "Relation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RelationMember" (
    "relation_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "RelationMember_pkey" PRIMARY KEY ("relation_id","user_id")
);

-- CreateTable
CREATE TABLE "public"."RelationInvitation" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "RelationInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LoveCounter" (
    "relation_id" TEXT NOT NULL,
    "from_user_id" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "last_loveu_sent" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoveCounter_pkey" PRIMARY KEY ("relation_id","from_user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Relation_relation_invitation_id_key" ON "public"."Relation"("relation_invitation_id");

-- AddForeignKey
ALTER TABLE "public"."Relation" ADD CONSTRAINT "Relation_relation_invitation_id_fkey" FOREIGN KEY ("relation_invitation_id") REFERENCES "public"."RelationInvitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelationMember" ADD CONSTRAINT "RelationMember_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelationMember" ADD CONSTRAINT "RelationMember_relation_id_fkey" FOREIGN KEY ("relation_id") REFERENCES "public"."Relation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LoveCounter" ADD CONSTRAINT "LoveCounter_relation_id_fkey" FOREIGN KEY ("relation_id") REFERENCES "public"."Relation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LoveCounter" ADD CONSTRAINT "LoveCounter_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
