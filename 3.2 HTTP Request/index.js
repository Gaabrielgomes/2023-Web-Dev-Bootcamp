import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Code is running properly. Congrats!</h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About me:</h1><h2>I'm an engineering and web developement student</h2>"
  );
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact:</h1><h2>Phone number: 1234567890</h2><h3>E-mail: name@gmail.com</h3><h4>"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
