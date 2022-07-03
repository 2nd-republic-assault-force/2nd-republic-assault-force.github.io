import React from "react";
import { Homepage } from "../pages/HomePage/Homepage";
import { PhotoGallery } from "../pages/PhotoGallery";
import { StatsPage } from "../pages/StatsPage";

type Route = {
      path: string;
      component: React.FC;
};

export const generalRoutes: Record<string, Route> = {
      HomePage: {
            path: "/",
            component: Homepage,
      },
      PhotoGallery: {
            path: "/photos",
            component: PhotoGallery,
      },
      Stats: {
            path: "/stats",
            component: StatsPage,
      },
};
