/* This is the main script file for the app. */
import {
    html,
    render
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  import Post from "./components/post/Post.js";
  
  function App() {
    /*The forms will eventually have a search advanced funcitonality*/

    /*Need to add a navbar (later)*/

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

  /*
    Here is a dino
                            . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
  */
  