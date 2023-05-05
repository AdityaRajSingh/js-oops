class User {
  #password;
  constructor(name, userName, password) {
    this.name = name;
    this.userName = userName;
    this.#password = password;
  }

  login(userName, password) {
    if (userName === this.userName && password === this.#password) {
      console.log("Login Successfully for user", this.userName);
    } else {
      console.log("Authentication Failed for user", this.userName);
    }
  }

  setPassword(newPassword) {
    this.#password = newPassword;
    console.log(" New Password is", this.#password);
  }

  // Add getter method for password
}

const nehal = new User("Nehal Mahida", "nehal_mahida", "password:)");
const js = new User("JavaScript", "js", "python:)");

nehal.login("nehal_mahida", "password:)"); // Login Successfully
js.login("js", "python:)"); // Login Successfully

nehal.name = "Mr. Nehal Mahida";

console.log(nehal);

nehal.password = "pwdchanged";

console.log(nehal);

// console.log(nehal.password); // undefined
// console.log(nehal.#password); // Syntax Error

nehal.login("nehal_mahida", "password:)"); // Login Successfully
nehal.login("nehal_mahida", "pwdchanged"); // Authentication Failed!!

nehal.setPassword("new_password:)");
nehal.login("nehal_mahida", "new_password:)"); // Login Successfully
