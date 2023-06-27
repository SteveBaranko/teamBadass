import axios from 'axios';

/*
This is the service file for the Post component.
It will be used to get the posts from the database (eventually).
Right now it hosts our JSON with Axios.
*/

export const getAllPosts = () => {
  return axios
    .get("./Post.json")
    .then((response) => {
      console.log("Response:", response);
      console.log("Data:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("GET Error:", error);
    });
};