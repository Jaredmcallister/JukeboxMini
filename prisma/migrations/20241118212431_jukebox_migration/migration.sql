/*
  Warnings:

  - You are about to drop the column `playlistSize` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owerid` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "playlistSize",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "owerid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;
