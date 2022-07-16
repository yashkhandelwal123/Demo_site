const db = require('./config/mongoose');

const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');


app.use(express.urlencoded());

app.use(cookieParser());
// using routers
app.use(express.static('./assets'));


//set up view engine
app.set('view engine' , ' ejs');
app.set('views', './views')


app.use(session({
    name: 'demo_site',
    secret: "blahsomething",
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/' , require('./routes/index.js'))


app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`server is cool and running on port : ${port}`); 
}); 