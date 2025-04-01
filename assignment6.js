require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware ???
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "wawawiwa",
    resave: process.env.SESSION_SECRET,
    saveUninitialized: true
  }));


  // Routes
  app.get('/', (req, res) => {
    res.sendFile(path.join("/public", "public/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


  // MySQL connection
  const mysql = require('mysql2');

  const db = mysql.createConnectoin({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'assignment6'
  });

  db.connect(err => {
    if (err) {
        console.error('DB connection failed: ', err);
    } else {
        console.log('Connected to database!');
    }
  });