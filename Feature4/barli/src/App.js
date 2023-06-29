import React from "react";
import Components from "./components/Components.jsx";
import * as Env from "./environment"
import Parse from "parse"

Parse.initialize(Env.APP_ID, Env.JS_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  
  /* The forms will eventually have a search advanced functionality */

  /* Need to add a navbar (later) */

  return (
    <div>
      <Components />
    </div>
  );
}

