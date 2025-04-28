// services/booking/conflictDetector.js

class ConflictDetector {
  constructor(databaseHandler) {
    this.databaseHandler = databaseHandler; // Dependency Injection
  }

  /**
   * Detects if there is a booking conflict for a given resource and time range.
   * @param {string} resourceID - ID of the resource (e.g., room, equipment)
   * @param {Date} startTime - Proposed booking start time
   * @param {Date} endTime - Proposed booking end time
   * @returns {boolean} - True if conflict exists, false otherwise
   */
  async detectConflict(resourceID, startTime, endTime) {
    const overlappingBookings = await this.databaseHandler.query(
      `
        SELECT * FROM bookings
        WHERE resource_id = ?
        AND status = 'confirmed'
        AND (
          (start_time <= ? AND end_time >= ?) OR
          (start_time <= ? AND end_time >= ?)
        )
      `,
      [resourceID, endTime, startTime, startTime, endTime]
    );

    return overlappingBookings.length > 0;
  }
}

module.exports = ConflictDetector;
