require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to hospital2 database!");

    // Create Table
    const createTable = `
        CREATE TABLE IF NOT EXISTS Patient(
            name VARCHAR(25),
            disease VARCHAR(25),
            age INT
        )
    `;

    connection.query(createTable, function(err, result) {
        if (err) throw err;
        console.log("Patient table created");

        // Insert Records
        const insert = `
            INSERT INTO Patient VALUES
            ('Karthik','Typhoid',24),
            ('Sneha','Asthma',21),
            ('Mohan','Migraine',32)
        `;

        connection.query(insert, function(err, result) {
            if (err) throw err;
            console.log("Patient records inserted");

            // Select All
            connection.query("SELECT * FROM Patient", function(err, result) {
                if (err) throw err;
                console.log("\nAll Records:");
                console.log(result);

                // Update
                connection.query("UPDATE Patient SET age = 26 WHERE name = 'Karthik'", function(err, result) {
                    if (err) throw err;
                    console.log("\nRecord Updated");

                    // Delete
                    connection.query("DELETE FROM Patient WHERE name = 'Sneha'", function(err, result) {
                        if (err) throw err;
                        console.log("\nRecord Deleted");

                        // Select Columns
                        connection.query("SELECT name, disease FROM Patient", function(err, result) {
                            if (err) throw err;
                            console.log("\nSelected Columns:");
                            console.log(result);

                            connection.end();
                        });
                    });
                });
            });
        });
    });
});