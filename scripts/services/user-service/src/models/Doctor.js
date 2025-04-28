const User = require("./User");

class Doctor extends User {
  constructor(userID, name, email) {
    super(userID, name, email);
  }

  getRole() {
    return "Doctor";
  }
}

module.exports = Doctor;
