/* This is the main script file for the app. */
import {
    html,
    render
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  import Post from "./components/post/Post.js";
  
  function App() {
    return html`
    <${Post} />
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  