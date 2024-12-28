CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    middleName VARCHAR(100),
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    studentId VARCHAR(50) UNIQUE NOT NULL,
    profile_picture BYTEA, -- For storing image data as binary
    isFirstLogin BOOLEAN DEFAULT TRUE,
    isDeleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
