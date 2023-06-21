const axios = window.axios;
const url = "http://localhost:3000";

    
export const getAllPosts = () => {
    return (
        axios
        .get("./services/Post.json")
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log("GET Error:", error);
        }
    )
    );
};