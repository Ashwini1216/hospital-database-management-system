# 🏥 Hospital Database Management using Express.js, and MySQL

This project is a simple **Hospital Database Management System** built using **Node.js**, **Express.js**, and **MySQL**. It demonstrates how to connect a Node.js application with a MySQL database and perform basic database operations such as creating a database, creating a table, inserting records, retrieving records, updating records, deleting records, and selecting specific columns.

## Features

* Create a MySQL database
* Connect Express.js application to MySQL
* Create a table for storing patient details
* Insert records into the table
* Retrieve all records from the table
* Update existing records
* Delete records from the table
* Select specific columns from the table

## Technologies Used

* Express.js
* MySQL
* mysql2
* dotenv

## Project Files

* `dbshop.js` → Creates the MySQL database
* `index.js` → Connects to the database and performs table creation and CRUD operations
* `.env` → Stores database credentials securely
* `.gitignore` → Prevents sensitive and unnecessary files from being uploaded to GitHub

## Setup Instructions

### 1. Install Dependencies

```bash
npm install express mysql2 dotenv
```

### 2. Create `.env` File

Add the following configuration to your `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=hospital2
PORT=3000
```

### 3. Run the Database Creation File

```bash
node dbshop.js
```

### 4. Run the Main Project File

```bash
node index.js
```

## Database Operations Performed

* Create the hospital database if it does not already exist
* Create the patient table if it does not already exist
* Insert sample patient records into the table
* Display all records from the table
* Update an existing patient record
* Delete a patient record
* Display selected columns from the table

## Project Structure

```bash
hospital-project/
│── node_modules/
│── .env
│── .gitignore
│── dbshop.js
│── index.js
│── package.json
│── package-lock.json
│── README.md
```

## Notes

* Make sure MySQL is installed and running on your system before executing the project.
* Keep the `.env` file private and do not upload it to GitHub.
* Add `node_modules/` and `.env` to `.gitignore`.
* Update the database credentials in the `.env` file according to your local MySQL setup.

## Author

**Ashwini**
