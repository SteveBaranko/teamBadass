import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

/*
Button to prompt the user to make a comment
will have a comment icon when we use tailwind
*/
export default function CommentOn({ data, onClick }) {
    return html`
        <div class="CommentOn">
            <button onClick=${onClick}>${data}</button>
        </div>
    `;
}