const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const router = require('./routes/users');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.APP_NODE_PORT, () => {
    console.log(`Node server is running on port ${process.env.APP_NODE_PORT}...`);
});