const express = require("express");
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();
//GET /users sends array of all users

router.get("/users", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);

  } catch (e) {
    next(e);
  }
});

//GET /users/:id sends the user specified by id.
router.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await prisma.user.findUniqueOrThrow({
      where: {
        id: +id
      },
    });
    res.status(201).send(users);

  } catch (e) {
    next(e);
  }
});

router.post("/users/:id/playlist", async (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const playlist = await prisma.playlist.create({
      data: {
        name,
        description,
        ownerid: +id,
        user: {
          connect: { id: +id },
        },
      },
    });

    console.log("here");

    res.json(playlist)
  } catch (e) {
    next(e);

  }

});
//The response should include all playlists owned by the user.
//POST /users/:id/playlists creates a new playlist owned by the user specified by id
module.exports = router;