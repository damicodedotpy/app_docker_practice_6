const mongoose = require('mongoose');
require('dotenv').config();


function ConnectDB() {
    try {
        mongoose.connect(process.env.DB_MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to the database")
        throw new Error("Error connecting to the database");
    };
};

module.exports = ConnectDB;