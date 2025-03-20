# Personal Finance Tracker 

This **Personal Finance Tracker** is a full-stack web application built with **React (Frontend), ASP.NET Core (Backend), and MySQL (Database)**. The application allows users to register, log in, add, track, and manage expenses with a secure authentication system.

This guide provides **step-by-step instructions** to **set up, run, and test** the application on your local machine.

---

## **Table of Contents**

1. Project Overview  
2. System Requirements  
3. Installation & Setup  
4. Running the Project  
5. API Documentation  
6. Database Setup  
7. Testing the Application  
8. Troubleshooting

---

## **1\. Project Overview**

The **Personal Finance Tracker** enables users to:  
* Register/Login securely (JWT-based authentication)  
* Add, edit, and delete expenses  
* View expenses by category, date, and pagination  
* Get total expense summaries  
* Store user and expense data securely in MySQL

---

## **2\. System Requirements**

Before proceeding, ensure that your system meets the following requirements:

### **Frontend:**

* **Node.js** (v16 or higher) – Required to run React  
* **npm** (v7 or higher) – For package management  
* **React.js** – Frontend framework

### **Backend:**

* **.NET SDK** (v8 or higher) – For running ASP.NET Core Web API  
* **MySQL Server** (v8.0 or higher) – To store user & expense data

### **Development Tools (Optional but Recommended):**

* **VS Code / Visual Studio** – For writing and debugging code  
* **Postman** – To test API endpoints  
* **MySQL Workbench** – Database management

---

## **3\. Installation & Setup**

Follow these steps to set up the project.

### **3.1 Clone the Repository**

Open a terminal and run:

bash  
Copy code  
`git clone https://github.com/yourusername/PersonalFinanceTracker.git`  
`cd PersonalFinanceTracker`

---

### **3.2 Set Up the Backend (ASP.NET Core)**

Navigate to the backend folder:

bash  
Copy code  
`cd server/PersonalFinanceTrackerAPI`

#### Install Dependencies

bash  
Copy code  
`dotnet restore`

#### Configure Database Connection

Edit **`appsettings.json`** in the backend folder:

json  
Copy code  
`"ConnectionStrings": {`  
  `"DefaultConnection": "server=localhost;port=3306;database=PersonalFinanceDB;user=root;password=yourpassword;"`  
`},`  
`"Jwt": {`  
  `"Key": "your_secret_key",`  
  `"Issuer": "your_issuer",`  
  `"Audience": "your_audience"`  
`}`

**Replace** `yourpassword`, `your_secret_key`, `your_issuer`, and `your_audience` accordingly.

####  Run Migrations & Database Setup

bash  
Copy code  
`dotnet ef migrations add InitialCreate`  
`dotnet ef database update`

This will create the **Users** and **Expenses** tables.

####  Start the Backend Server

bash  
Copy code  
`dotnet run`

* **Backend is running at:** `http://localhost:5029`

---

### Set Up the Frontend (React.js)

Navigate to the frontend folder:

bash  
Copy code  
`cd client`

#### Install Dependencies

bash  
Copy code  
`npm install`

####  Configure API URL

Open `client/src/services/api.js` and update:

javascript  
Copy code  
`const API_BASE_URL = "http://localhost:5029/api";`

####  Start the Frontend Server

bash  
Copy code  
`npm start`

**Frontend is running at:** `http://localhost:3000`

---

## **4\. Running the Project**

After setting up the **backend** and **frontend**, open your browser and visit:

 **Frontend (React App):**  
 `http://localhost:3000`

**Backend (Swagger API Docs):**  
 `http://localhost:5029/swagger/index.html`

You can now **register, log in, add expenses**, and explore the features.

---

## **5\. API Documentation**

###  Authentication (AuthController)

| Endpoint | Method | Description |
| ----- | ----- | ----- |
| `/auth/register` | `POST` | Register a new user |
| `/auth/login` | `POST` | Log in & get JWT token |

### Expense Management (ExpensesController)

| Endpoint | Method | Description |
| ----- | ----- | ----- |
| `/expenses/add` | `POST` | Add a new expense |
| `/expenses` | `GET` | Get expenses list |
| `/expenses/{id}` | `DELETE` | Delete an expense |

Use **Postman** or **Swagger UI** at `http://localhost:5029/swagger/index.html` to test.

---

## **6\. Database Setup**

If the database is not created automatically, run **setup.sql** manually.

####  Run the SQL Script

bash  
Copy code  
`mysql -u root -p < setup.sql`

**Database & tables are now created.**

---

## **7\. Testing the Application**

1. **Register a new user**

   * Open `http://localhost:3000/signup`  
   * Enter Name, Email & Password  
   * Click "Sign Up"  
2. **Login**

   * Open `http://localhost:3000/login`  
   * Enter Email & Password  
   * Click "Login"  
3. **Add an Expense**

   * Navigate to `http://localhost:3000/expenses`  
   * Enter amount, category, description, date  
   * Click "Add Expense"  
   * **It should now appear in the expenses list.**
