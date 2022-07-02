import express from "express";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import { opStatsImportHandler } from "./lib/handlers/opstats-import-handler";
import { AppContext } from "./appContext";
import { CensusClient, MetagameEvent, PS2Event, Rest } from "ps2census";
import { getMapImagesHandler } from "./lib/handlers/get-map-images-handler";

const serviceAccount = require("./service-account.json");

// firebase init
initializeApp({
      projectId: process.env.PROJECT_ID,
      credential: cert(serviceAccount),
});

// how do we build the app context in the dev portal
if (!process.env.CENSUS_API_KEY) {
      throw new Error(
            "Census API key not found. Please add it as an env variable"
      );
}

const db = getFirestore();
const appContext: AppContext = {
      census: {
            rest: new Rest.Client("ps2", {
                  serviceId: process.env.CENSUS_API_KEY,
            }),
            stream: new CensusClient(process.env.CENSUS_API_KEY, "ps2", {
                  streamManager: {
                        subscription: {
                              worlds: ["10"],
                              eventNames: ["MetagameEvent"],
                        },
                  },
            }),
      },
};

const app = express();
const port = 5000;

app.get("/", (req, res) => {
      res.send("Hello World!");
      console.log("request recieved");
});

app.get("/api/maps", async (req, res) => {
      const responseBody = await getMapImagesHandler(req, res, appContext);
      console.log("request for maps recieved");
      console.log(responseBody);
      res.send(responseBody);
});

app.get("/api/test/event", async (req, res) => {
      const event = new MetagameEvent(appContext.census.stream, {
            event_name: "MetagameEvent",
            experience_bonus: "25.000000",
            faction_nc: "6.274510",
            faction_tr: "19.607843",
            faction_vs: "9.803922",
            instance_id: "12358",
            metagame_event_id: "190",
            metagame_event_state: "137",
            metagame_event_state_name: "started",
            timestamp: "123456789",
            world_id: "10",
      });
      appContext.census.stream.emit("metagameEvent", event);
});

app.post("/opstats", (req, res) => {
      const responseBody = opStatsImportHandler(req, res);
      console.log("request recieved");
      res.send(responseBody);
});

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
});
