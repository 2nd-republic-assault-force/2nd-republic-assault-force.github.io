import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import http from "http";

const serviceAccount = require("./service-account.json");

initializeApp({
  projectId: process.env.PROJECT_ID,
  credential: cert(serviceAccount),
});

console.log(serviceAccount);
const db = getFirestore();

const server = http.createServer(async function (req, res) {
  // 2 - creating server

  //handle incomming requests here..

  if (req.url === "/") {
    //check the URL of the current request
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    const snapshot = await db.collection("users").get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });

    // set response content
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  }
});

server.listen(5000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
