import { AppContext } from "../../appContext";

const getMapForWorldIndex = (index: number, appContext: AppContext) => {
  appContext.census.get("event", { type: "KILL" });
};

export const clientFunctions = { getMapForWorldIndex };
