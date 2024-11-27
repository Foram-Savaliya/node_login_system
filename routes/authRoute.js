const express = require('express');

const routes =express.Router();



const { dashboardPage, loginPage, registerPage,registerUser,loginUser,logoutUser } = require('../controllers/AuthController');
const passport = require('passport');


routes.get('/',loginPage)
routes.get('/register',registerPage)
routes.get('/dashboard',passport.checkUser,dashboardPage)
routes.post('/registeruser',registerUser);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect : '/'}),loginUser)
routes.get('/logoutuser',logoutUser)


module.exports = routes;