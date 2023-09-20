// import LongestWord from './public/home.js';
import express from "express";



// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware setup
// app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)

//scripts.js
// async function dataAnalysisPrediction(budget) {
//     try {
//         const response = await fetch('/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ budget }),
//         });
//         const data = await response.json();
//         return data.predicted_sales;
//     } catch (error) {
//         console.error('Error fetching predicted sales:', error);
//         return null;
//     }
// }


// fetch('/login', {
//     method: 'POST',
//     body: JSON.stringify({ username, password }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(data => {
//     if (data.success) {
//         window.location.href = '/dashboard';
//     } else {
//         alert('Login failed. Please check your credentials.');
//     }
// });




app.use(express.static('public'));

// Define your API routes here, including login, registration, and other functionality

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

