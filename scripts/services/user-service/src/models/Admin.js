const User = require("./User");

class Admin extends User {
  constructor(userID, name, email) {
    super(userID, name, email);
  }

  getRole() {
    return "Admin";
  }
}

module.exports = Admin;
