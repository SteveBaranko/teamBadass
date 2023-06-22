import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import LikeButton from "./LikeButton.js";
import DislikeButton from "./DislikeButton.js";
import CommentOn from "./CommentOn.js";


const PostList = ({ posts }) => {
    /*
    This is the never ending list of posts.
    This is a stateless component
    It will map to the post table of our database
    */
    return html`
    <!-- NOTE: this maps to all of our components -->
        <div>
            <hr />
            This is the stateless child component with list
            <ul >
                ${posts.map(
                    (post) => 
                        html`
                            <li key=${post.id}>
                                <h3>${post.title}</h3>
                                <p>${post.content}</p>
                            </li>
                            <${LikeButton} data="like" onClick=${() => alert("Liked!")}/>
                            <${DislikeButton} data="dislike" onClick=${() => confirm("Are you sure?")}/>
                            <${CommentOn} data="Comment" onClick=${() => prompt("Enter your comment")} />
                            `
            )}
            </ul>
        </div>
        
    `;
};

export default PostList;