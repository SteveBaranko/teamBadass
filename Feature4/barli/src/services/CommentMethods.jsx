import Parse from 'parse';

export const createComment = (the_comment) => {
  const Comment = Parse.Object.extend('Comment');
  const comment = new Comment();
  comment.set('content', the_comment.content);
  comment.set('likes', the_comment.likes);
  comment.set('dislikes', the_comment.dislikes);
  comment.set('createdAt', the_comment.createdAt);
  comment.set('updatedAt', the_comment.updatedAt);
  comment.set('objectId', the_comment.objectId);

  return comment
    .save()
    .then((response) => {
      console.log('New object created with objectId: ' + response.id);
      return response;
    })
    .catch((error) => {
      console.log('Error: ' + error.message);
      throw error;
    });
}

export const deleteComment = (id) => {
  const Comment = Parse.Object.extend('Comment');
  const query = new Parse.Query(Comment);
  return query.get(id).then((comment) => {
    // The object was retrieved successfully.
    return comment.destroy();
  }, (error) => {
    // The object was not retrieved successfully.
    // Hopefully parse gives me an error.
    throw error;
  });
}

export const getById = (id) => {
  const Comment = Parse.Object.extend('Comment');
  const query = new Parse.Query(Comment);
  return query.get(id).then((comment) => {
    // The object was retrieved successfully.
    return comment;
  }, (error) => {
    // The object was not retrieved successfully.
    // Hopefully parse gives me an error.
    throw error;
  });
}

export const getAllComments = () => {
  const Comment = Parse.Object.extend('Comment');
  const query = new Parse.Query(Comment);
  return query.find().then((results) => {
    // Do something with the returned Parse.Object values.
    return results;
  }, (error) => {
    // Hopefully parse gives me an error.
    throw error;
  });
}