const express = require("express");
const checkAdmin = require("./middlewares/checkAdmin");
const checkDateFormat = require("./middlewares/checkDateFormat");
const checkAuthorize = require("./middlewares/checkAuthorize");


const app = express();

app.use(express.json()); // This middleware allows the app to parse JSON requests


app.get("/admin", checkAdmin);

app.post('/admin', checkAuthorize);



app.get("/time", checkDateFormat);


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})