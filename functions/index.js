// Vending Machine application is initialized here
// Server starts here, connect to firebase too
const functions = require("firebase-functions");
const express = require("express");
const app = express();
const firebase = require("firebase");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const path = require("path");

const firebaseApp = firebase.initializeApp(functions.config().firebase);

var serviceAccount = require(".//serviceAccountKey.json");

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vendingmachine-ae6e9.firebaseio.com"
});

const db = admin.firestore();
var database = firebaseAdmin.database();

app.set("view-engine", "ejs");
app.use(express.static("views"));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");

const port = 3000;
app.listen(port, () => {
  console.log("index.js is listening on port: " + port);
});

app.get("/", (req, res) => {
  db.collection("Users")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
      });
      res.render("user.ejs", { User: snapshot });
    })
    .catch(error => {
      console.log(error);
    });
});

 app.get("/user", (req, res) => {
 res.render("user.ejs");
  
});
