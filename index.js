const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { igdl, twitter, youtube, fbdown, ttdl } = require("btch-downloader");
var tkdl = require("@sasmeee/tkdl");
const { YTDL } = require("ytdl-easy");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/youtube-download", async (req, res) => {
  const inputValue = req.query.input;
  const youtubeURL = inputValue;

  YTDL(youtubeURL).then((data) => {
    console.log(data);
    res.json(data);
  });
});

app.get("/instagram-downloader", async (req, res) => {
  const inputValue = req.query.input;
  const instagramURL = inputValue;

  const data = await igdl(instagramURL);
  console.log(data);
  res.json(data);
});

app.get("/instagram-image-downloader", async (req, res) => {
    const inputValue = req.query.input;
    const instagramURL = inputValue;
  
    const data = await igdl(instagramURL);
    console.log(data);
    res.json(data);
  });

app.get("/tiktok-downloader", async (req, res) => {
  const inputValue = req.query.input;
  const tiktokURL = inputValue;

  const data = await ttdl(tiktokURL);
  console.log(data);
  res.json(data);
});

app.get("/twitter-downloader", async (req, res) => {
  const inputValue = req.query.input;
  const twitterURL = inputValue;

  const data = await twitter(twitterURL);
  console.log(data);
  res.json(data);
});

app.get("/facebook-downloader", async (req, res) => {
  const inputValue = req.query.input;
  const facebookURL = inputValue;

  const data = await fbdown(facebookURL);
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on Port : http://localhost:${port}`);
});
