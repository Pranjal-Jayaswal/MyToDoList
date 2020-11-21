const express = require('express');
const router = express.Router();

//kind of importing the folder and storing it ,to pass its object as callback function 
const homeController = require('../controllers/home_controller');

//serving the get request with a response action 
router.get('/', homeController.home);
// router.use('/createSlip',);
//to access this router in the supreme index.js file
module.exports = router;