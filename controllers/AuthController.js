const UserModel = require('../models/UserModel');
const loginPage = (req,res) => {
    if(res.locals.user){
        return res.redirect('/dashboard')
    }
    return res.render('login')
}

const registerPage = (req,res) => {
    return res.render('register')
}

const dashboardPage = (req,res) => {
    return res.render('dashboard');
}
const registerUser = async(req,res) => {
    try{
        const {name,email,password,cpassword } = req.body;
        if(password == cpassword){
            const user  = await UserModel.create({
                name:name,
                email:email,
                password:password
            })
            console.log("user register");
            return res.redirect('/');
            
        }else{
            console.log("password and confirm password not match");
            return res.redirect('/')
            
        }  
    }catch(err){
        console.log(err);
        return false;
    }
}
const loginUser = (req,res) => {
    return res.redirect('/dashboard');
}
const logoutUser = (req,res) => {
    req.logout((err)=>{
        if(err){
            console.log(err);
            return false
        }
        return res.redirect('/')
    })
}
module.exports = {
    loginPage,registerPage,dashboardPage,registerUser,loginUser,logoutUser
}