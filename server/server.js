require("dotenv").config();
const express = require("express");
const database = require("./db/config/database");
const server = express();
const PORT = process.env.PORT || 8000;


// connecting to database
database();


server.listen(PORT, (error) => {
     if(error){
          console.log(`Error while starting server: ${error.message}`);
          return;
     }
     console.log(`Server is running on PORT: ${PORT}`);
});
