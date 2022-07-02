import { Request, Response } from "express";
import { AppContext } from "../../appContext";
import { clientFunctions } from "../census-client";

export const getMapImagesHandler = async (
      req: Request,
      res: Response,
      appContext: AppContext
) => await clientFunctions.getMapForWorldIndex(10, appContext);
