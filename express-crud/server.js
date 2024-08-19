const express  = require("express")
const app = express()


// home page ka URL "/"
app.get("/", (req, res) => {
    res.send("<h1> Hello world using Express</h1>");
});

const PORT = process.env.PORT || 3000;
// process.environment.port (port passed here  using envieronment variable) OR hardcoded 3000



app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`)
});

