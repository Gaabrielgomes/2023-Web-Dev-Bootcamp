import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ferrgom_";
const yourPassword = "123123";
const yourAPIKey = "24e292f0-2be8-4e7e-a397-bd2fbdf386df";
const yourBearerToken = "b016b1a2-3aa5-416b-88f4-e3f8b4abc242";

app.get("/", (req, res) => {
  res.render("index.ejs", {
    content: "API responses after clicking any button",
  });
});

app.get("/noAuth", async (req, res) => {
  try {
    const resp = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(resp.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const resp = await axios.get(API_URL + "/all?page=1", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(resp.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const resp = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(resp.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const resp = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(resp.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
