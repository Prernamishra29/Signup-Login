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
  