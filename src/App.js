import React from "react";
import Post from "./components/post/Post";
import * as Env from "./environment"
import Parse from "parse"

Parse.initialize(Env.APP_ID, Env.JS_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  
  /* The forms will eventually have a search advanced functionality */

  /* Need to add a navbar (later) */

  return (
    <div>
      <Post />
      <form class="bg-green-200 p-4">
        {/* Input form for "whatever1" */}
        <input type="text" name="whatever1" placeholder="Enter post" />
        <input type="submit" value="Submit" />
      </form>
      <form>
        {/* Input form for "whatever2" */}
        <input type="text" name="whatever2" placeholder="Enter something" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;