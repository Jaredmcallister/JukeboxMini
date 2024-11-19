const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/api', require('./api/playslist'));

app.get("/", (req, res) => {
  res.send("You've reached the Playlist API");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});