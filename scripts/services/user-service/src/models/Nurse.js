const User = require("./User");

class Nurse extends User {
  constructor(userID, name, email) {
    super(userID, name, email);
  }

  getRole() {
    return "Nurse";
  }
}

module.exports = Nurse;
