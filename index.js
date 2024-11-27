const express = require('express');

const port= 8000;

const app = express();

const path = require('path');

const db = require('./config/db')

app.set('view engine','ejs');

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');

app.use(session({
    secret: 'rnw4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))

app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);

app.use('/',express.static(path.join(__dirname,"public")))

app.use(express.urlencoded())

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port :- ${port}`);
    
})