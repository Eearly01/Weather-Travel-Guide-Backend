const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

//Controllers
const projectController = require('./controllers/projectControllers.js');


// Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// Routes
app.use(projectController);

// MongoDB
mongoose.connect(process.env.MONGODB);
mongoose.connection.once('open', () => {
	console.log('connected to mongoDB');
});

app.listen(3000, () => {
	console.log('listening...');
});
