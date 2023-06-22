import {
    html,
    useEffect,
    useState
} from "https://unpkg.com/htm/preact/standalone.module.js";

/*
This is the main script file for the app.
It is confusingly named
Don't let that thow you off.
It relies on useEffect to get the posts from our axios service.
*/
import { getAllPosts } from "../../services/Post.js";
import PostList from "./PostList.js";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    return html` 
        <div>
            <h1 class="text-2z1">Barli</h1>
            <!--<p>This is the  stateful parent component.</p>-->
                <${PostList} posts=${posts} />
        </div>
    `;
};

export default Post;