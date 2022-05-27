// add database interaction

import { CensusEvent } from "../../types/censusTypes";

type CensusEventLog = Array<CensusEvent>;

const saveEventJsonToDatabase = async (operationData: CensusEvent) => {
  switch (operationData.event_name) {
    case "AchievementEarned":
      break;

    default:
      break;
  }
};

export const databaseClient = {
  saveEventJsonToDatabase,
};
