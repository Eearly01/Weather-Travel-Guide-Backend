const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));


// Routes
const projectController = require('./controllers/projectControllers.js');
app.use('/days', projectController);

// MongoDB
mongoose.connect(process.env.MONGODB);
mongoose.connection.once('open', () => {
	console.log('connected to mongoDB');
});

app.listen(PORT, () => {
	console.log('listening...');
});
