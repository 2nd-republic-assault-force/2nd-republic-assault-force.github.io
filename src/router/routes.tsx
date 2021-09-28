import React from "react";
import { Homepage } from "../pages/Homepage";


type Route = {
  path: string;
  component: React.FC;
}


export const generalRoutes:Record<string, Route> = {
    HomePage: {
      path:'/',
      component: Homepage
    },
}