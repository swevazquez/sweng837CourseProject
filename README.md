## UML Diagrams & Design Explanations

### 1. Use Case Diagram

The Use Case Diagram provides a high-level overview of system functionalities and actors. Primary actors (Admin, Nurse, Doctor, Lab Technician) interact with use cases like **Schedule Resource**, **Manage Users**, and **Search/Filter Resources**. Supporting systems (Notification System, External Calendar) integrate via system behaviors like **Send Notifications** and **Synchronize with Calendar**.

### 2. Domain Model

The Domain Model identifies core entities like **User** (Admin, Doctor, Nurse, Lab Technician), **Resource** (ExamRoom, MedicalEquipment, Lab), **Booking**, **AuditTrail**, and their relationships. It focuses on real-world concepts, ensuring an accurate representation of the scheduling problem domain.

### 3. Class Diagram

The Class Diagram expands the Domain Model into software constructs. It includes:

- **Abstract Factory Pattern** for resource creation.
- **Observer Pattern** for notifications (email, SMS, in-app).
- **Adapter Pattern** for external calendar integration.
- Associations, attributes, and methods reflect system behavior and design patterns.

### 4. Sequence Diagrams

Each Sequence Diagram illustrates interactions between system components for specific use cases:

- **Schedule Resource**: Flow from user request to conflict detection, booking creation, notification dispatch, and calendar sync.
- **Modify/Cancel Schedule**: Similar to scheduling but includes state changes and additional audit trail logging.
- **Manage Users (RBAC)**: Demonstrates user creation/modification, database interaction, and audit logging.
- **Search/Filter Resources**: Showcases querying the database for resource availability.

### 5. State Diagram (Booking)

The Booking object transitions between states like **Scheduled**, **Modified**, **Cancelled**, and **Completed**, ensuring lifecycle tracking of resource bookings.

### 6. Activity Diagram (Schedule Resource)

A swimlane diagram shows step-by-step process flow for scheduling, including role-based actions, conflict detection, and external integrations.

### 7. Component Diagram

Depicts system components such as:

- **Frontend** (Doctor Dashboard, Patient Portal).
- **Backend Services** (Booking, User Management, Notification, Authentication).
- Supporting components (DatabaseHandler, CalendarAdapter).
- Interactions and connectors follow UML standards, showing REST APIs and message queues.

### 8. Deployment Diagram

Illustrates cloud deployment on AWS:

- **EC2 instances** for backend services.
- **Isolated PostgreSQL databases** for each microservice.
- **RabbitMQ** for asynchronous messaging.
- Integration with **external calendar APIs**.

---

Refer to the `/images` folder for detailed UML diagrams or the '/word' document for a comprehensive overview.

---
