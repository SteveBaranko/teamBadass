import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function DislikeButton({ data, onClick }) {
    return html`
        <div class="DislikeButton">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}