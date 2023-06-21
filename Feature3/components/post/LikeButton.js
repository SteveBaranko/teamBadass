import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function LikeButton({ data, onClick }) {
    return html`
        <div class="LikeButton">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}