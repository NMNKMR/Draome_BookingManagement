const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/droame', require('./routes/operationRoutes'));

mongoose.connect(DB_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));
