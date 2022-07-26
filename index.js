const db = require('./config/mongoose');

const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
//using connect-mongo to store session when server is not running. it requires argument ,which is to be store
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle:'expanded',
    prefix: '/css'
}))

app.use(express.static('./assets'));




app.use(express.urlencoded());

app.use(cookieParser('secret'));
// using routers
app.use(express.static('./assets'));


//set up view engine
app.set('view engine' , 'ejs');
app.set('views', './views')

// app.engine('ejs', require('ejs').__express);

app.use(expressLayouts);
// // extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// updated version to store session
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/demosite_db' })
  }));

app.use(session({
    name: 'demo_site',
    secret: "blahsomething",
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create({
        
        mongoUrl: 'mongodb://localhost/demosite_db',
        autoRemove: 'disabled'
        
    }, function(err ){
        console.log(err || 'connect-mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session()); 
app.use(passport.setAuthenticatedUser);
app.use('/' , require('./routes/index.js'))


app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`server is cool and running on port : ${port}`); 
}); 