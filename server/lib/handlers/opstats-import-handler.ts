import { Request, Response } from "express";
import { saveEventLogJson } from "../event-manager/save-event-array";

export const opStatsImportHandler = (req: Request, res: Response) => {
  //validate the data? (its going to be huge so i may do this on the fly as we load in records?)
  saveEventLogJson(JSON.parse(req.body));
  return { data: "fake data" };
};
