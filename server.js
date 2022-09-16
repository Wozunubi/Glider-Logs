const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});