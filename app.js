const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlEncoded({ expetended: false }));

app.listen(3000);
console.log("Server is running on port 3000");
