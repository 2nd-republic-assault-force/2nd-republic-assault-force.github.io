// add database interaction

import { CensusEvent } from "../../types/censusTypes";
import { databaseClient } from "../database-client/database-client";

type CensusEventLog = Array<CensusEvent>;

//will need to pass down the app context to this level

export const saveEventLogJson = async (operationData: CensusEventLog) => {
  operationData.forEach((event) => {
    databaseClient.saveEventJsonToDatabase(event);
  });
};
