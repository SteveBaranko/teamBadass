import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
export const checkUserCredentials = async (username, password) => {
  try {
   
    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo('username', username);
    const user = await userQuery.first();

    if (!user) {
      return false;
    }

    // Compare the provided password with the user's password
    const authenticated = await Parse.User.logIn(username, password);

    return authenticated !== undefined;
  } catch (error) {
    console.error('Error checking user credentials:', error);
    throw error;
  }
};
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};


export const getUserId = async (username, password) => {
  try {
    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo('username', username);
    const user = await userQuery.first();

    if (!user) {
      return false;
    }

    // Compare the provided password with the user's password
    const authenticated = await Parse.User.logIn(username, password);

    return authenticated !== undefined;
  } catch (error) {
    console.error('Error checking user credentials:', error);
    throw error;
  }
}