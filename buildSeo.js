const pug = require("pug");
const fs = require("fs");

const {
  basics: {
    name,
    label,
    website,
    picture,
    location: { city }
  }
} = require("./src/resume.json");

// react-helmet didn't help with non-google crawlers
const html = pug.renderFile("./public/index.html.pug", {
  title: `Resume/CV of ${name}`,
  description: `${name} - ${label}`,
  website: website,
  imageUrl: picture,
  keywords: `${name}, ${label}, CV, Resume, Portfolio, ${city}`
});

fs.writeFileSync("./public/index.html", html);
