const express = require('express');
const router = express.Router();

//Mongoose Imports
const mongoose = require('mongoose')
const DayModel = require('../models/dayModel.js')

// Index
router.get('/', (req, res) => {
	DayModel.find()
		.sort({ number: 1 })
		.exec((err, weatherData) => {
			if (err) {
				console.log(err);
				res.status(500).json({ error: 'Internal server error' });
			} else {
				res.status(200).json(weatherData);
			}
		});
});


// Create

router.post('/', async (req, res) => {
	const createdDay = await DayModel.create(req.body);
	res.json(createdDay);
});

// DELETE - DELETE ONE

router.delete('/:id', async (req, res) => {
	const deletedDay = await DayModel.findByIdAndRemove(req.params.id);
	res.json(deletedDay);
});

// UPDATE - UPDATE ONE

router.put('/:id', async (req, res) => {
	const updatedDay = await DayModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json(updatedDay);
});

module.exports = router;