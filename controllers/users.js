const UserModel = require('../models/User');


function saludar(req, res) {
    res.send("Hello from user route...");
}

module.exports = {
    saludar
};