import Parse from 'parse';

/*
This is the service file for the Post component.
It will be used to get the posts from the database (eventually).
Right now it hosts our JSON with Axios.
*/
export const createPost = (the_post) => {
  console.log("Creating:", the_post);
  const Post = Parse.Object.extend('Post');
  const post = new Post();
  post.set('title', the_post.title);
  post.set('content', the_post.content);
  post.set('author', the_post.author);
  post.set('likes', the_post.likes);
  post.set('dislikes', the_post.dislikes);
  post.set('comments', the_post.comments);
  post.set('createdAt', the_post.createdAt);
  post.set('updatedAt', the_post.updatedAt);
  post.set('objectId', the_post.objectId);
  return post.save().then((response) => {
    console.log('New object created with objectId: ' + response.id);
  })
  .catch((error) => {
    console.log('Error: ' + error.message);
  });
};

export const getById = (id) => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);
  return query.get(id).then((post) => {
    // The object was retrieved successfully.
    return post;
  }, (error) => {
    // The object was not retrieved successfully.
    // Hopefully parse gives me an error.
    throw error;
  });
};


export const getAllPosts = () => {
  const Lesson = Parse.Object.extend('Post');
  const query = new Parse.Query(Lesson);
  return query.find().then((results) => {
    // Do something with the returned Parse.Object values.
    return results;
  }, (error) => {
    // Hopefully parse gives me an error.
    throw error;
  });
};