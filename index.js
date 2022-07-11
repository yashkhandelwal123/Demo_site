const express = require('express');
const app = express();
const port = 8000;

// using routers
app.use('/' , require('./routes/index.js'))

app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`server is cool and running on port : ${port}`); 
}); 