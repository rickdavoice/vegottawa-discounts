const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

app.use(express.static("public"));

app.get("/api/cards", async (req, res) => {
  const { data } = await axios.get(
    "https://vegottawa.org/membership/"
  );

  const $ = cheerio.load(data);

  const cards = [];

  $("figure.wp-block-image").each((i, el) => {
    cards.push({
      link: $(el).find("a").attr("href"),
      image: $(el).find("img").attr("src"),
      caption: $(el).find("figcaption").text().trim(),
    });
  });

  res.json(cards);
});

app.listen(3000, () =>
  console.log("http://localhost:3000")
);