const express = require('express');
const router = express.Router();

//Mongoose Imports
const mongoose = require('mongoose')
const DayModel = require('../models/dayModel.js')

// Index
router.get('/days', async (req, res) => {
	const allDays = await DayModel.find({});
	res.json(allDays);
});

// Create

router.post('/days', async (req, res) => {
	const createdDay = await DayModel.create(req.body);
	res.json(createdDay);
});

// DELETE - DELETE ONE

router.delete('/days/:id', async (req, res) => {
	const deletedDay = await DayModel.findByIdAndRemove(req.params.id);
	res.json(deletedDay);
});

// UPDATE - UPDATE ONE

router.put('/days/:id', async (req, res) => {
	const updatedDay = await DayModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json(updatedDay);
});

module.exports = router;