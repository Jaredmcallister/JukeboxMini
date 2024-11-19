const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < 3; i++) {
    const playlist = [];
    for (let j = 0; j < 5; j++) {
      playlist.push({
        name: `Playlist ${i}${j}`,
        description: `Playlist ${i}${j}`,
        ownerid: Math.floor(Math.random() * 10) + 1,

      });
    }
    await prisma.user.create({
      data: {
        username: `User ${i + 1}`,
        playlists: { create: playlist, },
      },
    });
  }
};

seed();