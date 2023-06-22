const axios = window.axios;
const url = "http://localhost:3000";
/*
This is the service file for the Post component.
It will be used to get the posts from the database (eventually).
Right now it hosts our json with axios.
*/
    
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