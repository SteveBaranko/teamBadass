import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
/*
DiskLike button component
It is a stateless component
It will have a thumbs donw icon when we use tailwind
It receives a confirm onclick eventfor now
*/

export default function DislikeButton({ data, onClick }) {
    return html`
        <div class="DislikeButton">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}