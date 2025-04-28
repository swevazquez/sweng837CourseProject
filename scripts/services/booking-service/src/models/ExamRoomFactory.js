import ResourceFactory from "./resourceFactory";
import ExamRoom from "./examRoom";

class ExamRoomFactory extends ResourceFactory {
  createResource(roomNumber, floor) {
    return new ExamRoom(roomNumber, floor);
  }
}

export default ExamRoomFactory;
