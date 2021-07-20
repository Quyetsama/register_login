const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')

const route = require("./routes");
const db = require("./db");

const bodyParser = require("body-parser");

const session = require('express-session')



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(bodyParser.urlencoded({extended: true}));

// Connect to db
db.connect();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(cookieParser());


route(app);




app.listen("3000", function(){
    console.log("Server is running!!!");
});