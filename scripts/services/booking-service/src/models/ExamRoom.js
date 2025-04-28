class ExamRoom {
  constructor(resourceID, name, roomNumber, floor) {
    this.resourceID = resourceID;
    this.name = name;
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.status = "available";
  }

  reserve() {
    this.status = "reserved";
  }

  release() {
    this.status = "available";
  }
}

export default ExamRoom;
