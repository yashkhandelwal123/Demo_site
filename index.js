const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());
// using routers
app.use(express.static('./assets'));
app.use('/' , require('./routes/index.js'))


//set up view engine
app.set('view engine' , ' ejs');
app.set('views', './views')

app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`server is cool and running on port : ${port}`); 
}); 