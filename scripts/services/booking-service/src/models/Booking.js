class Booking {
  constructor(bookingID, resourceID, userID, startTime, endTime, status) {
    this.bookingID = bookingID; // Unique identifier for the booking
    this.resourceID = resourceID; // Associated resource
    this.userID = userID; // User who created the booking
    this.startTime = startTime; // Start time of the booking
    this.endTime = endTime; // End time of the booking
    this.status = status; // Enum: confirmed, canceled, modified
  }

  // Methods
  validateBookingDetails() {
    // Placeholder for validating booking time overlaps, etc.
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

export default Booking;
