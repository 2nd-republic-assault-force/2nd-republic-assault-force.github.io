import _ from "lodash";
import { PS2EventNames } from "ps2census/dist/stream";
import { AppContext } from "../../appContext";

const getMapForWorldIndex = async (index: number, appContext: AppContext) =>
      await appContext.census.rest.get("image", {
            path: "/files/ps2/images/static/1.png",
      });

const listenForEvent = async (eventName: PS2EventNames, appContext: AppContext) => {
      await appContext.census.stream.addListener(, ()=> {})
};

export const clientFunctions = { getMapForWorldIndex };
