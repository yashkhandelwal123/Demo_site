const express = require('express');
const app = express();
const port = 8000;


app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`server is cool and running on port : ${port}`); 
});