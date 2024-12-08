// Signup Function
function signup(userName) {
    const users = ["Alice", "Bob", "Charlie"]; // Existing usernames
    
    if (users.includes(userName)) {
      return "User Already Registered, Please Login";
    } else {
      users.push(userName); // Add the new user
      return "Signup Successful, Please Login";
    }
  }
  
  // Export the signup function
  module.exports = { signup };
// Login Function
function login(userName, password) {
    const users = ["Alice", "Bob", "Charlie"]; // Existing usernames
    const correctPassword = "Emp@123"; // Password to validate
  
    if (!users.includes(userName)) {
      return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
      return "Wrong Password....";
    } else {
      return "Login Successful...";
    }
  }
  
  // Export the login function
  module.exports = { signup, login };
    