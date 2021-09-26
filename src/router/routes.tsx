import React from "react";
import { Route } from "react-router-dom";

          <Route path='/youtube' component={() => { 
            window.location.href = 'https://www.youtube.com'; 
            return null;
          }}/>