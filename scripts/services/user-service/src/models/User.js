class User {
  constructor(userID, name, email) {
    this.userID = userID;
    this.name = name;
    this.email = email;
  }

  getRole() {
    return "User";
  }
}

module.exports = User;
