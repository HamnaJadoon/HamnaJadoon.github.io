fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (MEDIUM_USERNAME !== undefined && MEDIUM_USERNAME !== "YOU MEDIUM USERNAME HERE") {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const encodedUsername = encodeURIComponent(MEDIUM_USERNAME);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodedUsername}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailedMedium);
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.end();
} else {
  console.log("Skipping Medium blogs fetch - no valid MEDIUM_USERNAME provided");
}
