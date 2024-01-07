const express = require('express');
const { userloginController, userRegisterController } = require('../controllers/userController');

//router object

const router= express.Router();

//route
router.post('/login',userloginController);

router.post('/register',userRegisterController);
module.exports = router;