import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var authorization = false;

app.use(bodyParser.urlencoded({ extended: true }));

function password_check(req, res, next) {
  const password = req.body["password"];
  if (password === "P@ssw0rd") {
    authorization = true;
  }
  next();
}

app.use(password_check);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (authorization) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
