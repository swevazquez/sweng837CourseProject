CREATE TABLE Bookings (
    booking_id UUID PRIMARY KEY,
    resource_id UUID NOT NULL,
    user_id UUID NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status VARCHAR(20) CHECK (status IN ('confirmed', 'canceled', 'modified')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Resources (
    resource_id UUID PRIMARY KEY,
    resource_type VARCHAR(50) NOT NULL,  -- e.g., 'ExamRoom', 'Lab', 'MedicalEquipment'
    name VARCHAR(100),
    status VARCHAR(20) CHECK (status IN ('available', 'reserved')),
    -- Type-specific attributes (nullable where not applicable)
    room_number VARCHAR(10),
    floor INT,
    equipment_type VARCHAR(50),
    serial_number VARCHAR(50),
    lab_type VARCHAR(50),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Users (
    user_id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(20) CHECK (role IN ('Admin', 'Doctor', 'Nurse', 'LabTechnician')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AuditTrail (
    audit_id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    booking_id UUID,
    action VARCHAR(50) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id)
);