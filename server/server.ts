import express from "express";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import { opStatsImportHandler } from "./lib/handlers/opstats-import-handler";
import { AppContext } from "./appContext";
import { Rest } from "ps2census";
import { getMapImagesHandler } from "./lib/handlers/get-map-images-handler";

const serviceAccount = require("./service-account.json");

// firebase init
initializeApp({
  projectId: process.env.PROJECT_ID,
  credential: cert(serviceAccount),
});

// how do we build the app context in the dev portal

const db = getFirestore();
const appContext: AppContext = {
  census: new Rest.Client("ps2", { serviceId: "example" }),
};

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("request recieved");
});

app.get("/api/maps", (req, res) => {
  const responseBody = getMapImagesHandler(req, res, appContext);
  console.log("request recieved");
  res.send(responseBody);
});

app.post("/opstats", (req, res) => {
  const responseBody = opStatsImportHandler(req, res);
  console.log("request recieved");
  res.send(responseBody);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
