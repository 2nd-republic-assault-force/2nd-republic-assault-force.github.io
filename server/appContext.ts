import { CensusClient, Rest } from "ps2census";

export type AppContext = {
      census: { rest: Rest.Client; stream: CensusClient };
};
