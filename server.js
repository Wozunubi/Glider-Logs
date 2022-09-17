const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require('path');
const {dirname} = require('path');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use('/', require('./server/routes/router'));

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.set("view engine", "ejs")

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});