class User {
  #password;
  constructor(email, password) {
    this.email = email;
    this.#password = password;
    console.log("User Created Successfully for email", this.email);
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log("Login Successful for email", this.email);
    } else {
      console.log("Authentication Failed for email", this.email);
    }
  }

  resetPassword(newPassword) {
    this.#password = newPassword;
    console.log("Password changed successfully for email", this.email);
  }

  logout() {
    console.log("Logout Successfully for email", this.email);
  }
}

class Author extends User {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    // add content to your DB. :)
    console.log("Post created successfully for email", this.email);
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
  }

  removeUser(userId) {
    // remove this userId from your DB.
    console.log("User Removed successfully by Admin");
  }
}

const nehal = new Author("nm@gmail.com", "password:)");
nehal.login("nm@gmail.com", "password:)");
nehal.createPost(
  "I hope you are enjoying this article. Don't forget to leave your feedback. :)"
);
nehal.createPost("I am tired, Do you wanna buy me a coffee? :)");
console.log("Number of posts: " + nehal.getNumOfPost()); // 2

const json = new Admin("jason@gmail.com", "[Object] [object]");
json.login("jason@gmail.com", "[Object] [object]");
json.resetPassword("{id: 1}");
json.login("jason@gmail.com", "{id: 1}");
json.removeUser(12);
