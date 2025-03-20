-- Create Database
CREATE DATABASE PersonalFinanceTracker;

-- Use the database
USE PersonalFinanceTracker;

-- Create Users Table
CREATE TABLE Users (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Expenses Table
CREATE TABLE Expenses (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    UserId INT NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    Category VARCHAR(255) NOT NULL,
    Description TEXT,
    Date DATE NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE
);
