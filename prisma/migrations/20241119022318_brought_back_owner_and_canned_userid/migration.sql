/*
  Warnings:

  - You are about to drop the column `userId` on the `Playlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
