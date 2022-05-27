import express from "express";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import { opStatsImportHandler } from "./lib/handlers/opstats-import-handler";
import { AppContext } from "./appContext";

const serviceAccount = require("./service-account.json");

// firebase init
initializeApp({
  projectId: process.env.PROJECT_ID,
  credential: cert(serviceAccount),
});

// how do we build the app context in the dev portal
console.log(serviceAccount);
const db = getFirestore();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("request recieved");
});

app.post("/opstats", (req, res) => {
  const responseBody = opStatsImportHandler(req, res);
  console.log("request recieved");
  res.send(responseBody);
});

// const server = http.createServer(async function (req, res) {
//   if (req.url === "/") {
//     //check the URL of the current request
//     // set response header
//     res.writeHead(200, { "Content-Type": "text/html" });

//     const snapshot = await db.collection("users").get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//     });

//     // set response content
//     res.write("<html><body><p>This is home Page.</p></body></html>");
//     res.end();
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
