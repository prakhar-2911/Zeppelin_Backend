const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://prakhar_sharma:PSnaeT3iHcHvT1PX@cluster0-db0aq.mongodb.net/countryList';


const countryRoutes = require('./Routes/countries');
const authRoutes = require('./Routes/auth');

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/auth', authRoutes);

app.use('/countries', countryRoutes);


app.use((error, req, res, next) => {
        const status = error.statusCode || 500;
        const message = error.message; 
        res.status(status).json({
            message: message
        });
     
});


mongoose
.connect(MONGODB_URI)
.then(result => {
    app.listen(8080, () => {
        console.log("Server is running");
    });
})
.catch(err => {
    console.log(err);
});
