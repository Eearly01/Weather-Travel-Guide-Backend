const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
	number: {type: Number},
	city: String,
	temp: { type: Number, required: true },
	windSpeed: { type: String, required: true },
	windDirection: String,
	probabilityOfPrecipitation: { value: {type: Number, default: 0} },
	detailedForecast: String,
	planner: {type: String, default: ' '}
});

const dayModel = mongoose.model('day', daySchema);

module.exports = dayModel;
