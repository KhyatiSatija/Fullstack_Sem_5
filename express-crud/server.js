const express  = require("express")
const app = express()


const mongoose = require("mongoose");
// URI or query string 
// mongodb://username:password@URLOfMOngoDB(IP Address// even better -write the image name):portNumber/?finalQuery
mongoose.connect(
    "mongodb://root:root@mongo:27017/?authSource=admin")
    .then( () => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error trying to connect to MongoDB", e);
    });

// home page ka URL "/"
app.get("/", (req, res) => {
    res.send("<h1> Hello world using Express and Docker Compose!!!</h1>");
});

const PORT = process.env.PORT || 3000;
// process.environment.port (port passed here  using envieronment variable) OR hardcoded 3000



app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`)
});

