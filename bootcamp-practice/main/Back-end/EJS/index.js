import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  const today = new Date("April 26, 2026 01:15:00");
  const day = today.getDay();

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard"

  if (day === 0 || day === 6){
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render(__dirname + "/views/index.ejs", {type, adv});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});