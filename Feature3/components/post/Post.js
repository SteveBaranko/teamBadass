import {
    html,
    useEffect,
    useState
} from "https://unpkg.com/htm/preact/standalone.module.js";


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