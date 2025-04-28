class ExternalCalendarAdapter {
  constructor(calendarType) {
    this.calendarType = calendarType; // e.g., 'Google' or 'Outlook'
  }

  syncBooking(booking) {
    throw new Error("syncBooking() must be implemented by subclasses");
  }
}

class GoogleCalendarAdapter extends ExternalCalendarAdapter {
  constructor() {
    super("Google");
  }

  syncBooking(booking) {
    // Logic to sync booking with Google Calendar
  }
}

class OutlookCalendarAdapter extends ExternalCalendarAdapter {
  constructor() {
    super("Outlook");
  }

  syncBooking(booking) {
    // Logic to sync booking with Outlook Calendar
  }
}

module.exports = {
  ExternalCalendarAdapter,
  GoogleCalendarAdapter,
  OutlookCalendarAdapter,
};
