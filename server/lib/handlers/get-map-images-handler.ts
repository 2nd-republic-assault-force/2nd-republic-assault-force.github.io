import { Request, Response } from "express";
import { AppContext } from "../../appContext";
import { clientFunctions } from "../census-client";

export const getMapImagesHandler = (
  req: Request,
  res: Response,
  appContext: AppContext
) => {
  return clientFunctions.getMapForWorldIndex(10, appContext);
};
