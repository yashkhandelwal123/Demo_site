// connnection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demosite_db');


const db = mongoose.connection;


db.on('error', function(err) { console.error.bind(console ,'err in connecting to database'); });


db.once('open', function() {
  
    console.log("Successfully connected to the database");

});