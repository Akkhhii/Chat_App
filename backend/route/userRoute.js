const express = require('express');
const getUsersForSideBar = require('../controllers/userController');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get('/', protectRoute, getUsersForSideBar);

module.exports = router