import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
/*
Like button component
It is a stateless component
It will have a thumbs up icon when we use tailwind
*/

export default function LikeButton({ data, onClick }) {
    return html`
        <div class="LikeButton">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}