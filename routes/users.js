const router = require('express').Router();
const userControllers = require('../controllers/users');

router.get('/', userControllers.saludar);


module.exports = router;