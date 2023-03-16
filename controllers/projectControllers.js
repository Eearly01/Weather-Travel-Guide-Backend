const express = require('express');
const router = express.Router();

//Mongoose Imports
const mongoose = require('mongoose')
const DayModel = require('../models/dayModel.js')

// Index
router.get('/', async (req, res) => {
	const all = await DayModel.find({});
	all.sort((a, b) => a.number - b.number);
	res.json(all);
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