const User = require("./User");

class LabTechnician extends User {
  constructor(userID, name, email) {
    super(userID, name, email);
  }

  getRole() {
    return "LabTechnician";
  }
}

module.exports = LabTechnician;
