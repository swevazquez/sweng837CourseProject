class AuditTrail {
  constructor(auditID, action, timestamp, userID) {
    this.auditID = auditID;
    this.action = action;
    this.timestamp = timestamp;
    this.userID = userID;
  }

  logAction() {
    // Placeholder logic for logging the action
  }
}

module.exports = AuditTrail;
