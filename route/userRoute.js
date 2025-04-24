const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUserByUserId); // new route to get user by userId
router.post('/login', userController.loginUser);



module.exports = router;
