import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function CommentOn({ data, onClick }) {
    return html`
        <div class="CommentOn">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}