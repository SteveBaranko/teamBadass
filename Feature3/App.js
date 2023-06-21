/* This is the main script file for the app. */
import {
    html,
    render
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  import Post from "./components/post/Post.js";
  
  function App() {
    return html`
    <${Post} />
    <form>
        <input type="text" name="whatever1" placeholder="Enter post" />
        <input type="submit" value="Submit" />
    </form>
    <form>
        <input type="text" name="whatever2" placeholder="Enter something" />
        <input type="submit" value="Submit" />
    </form>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  