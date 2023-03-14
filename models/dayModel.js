const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
	city: String,
	temp: { type: Number, required: true },
	windSpeed: { type: String, required: true },
	windDirection: String,
	probabilityOfPrecipitation: { value: {type: Number, default: 0} },
	detailedForcast: String,
});

const dayModel = mongoose.model('day', daySchema);

module.exports = dayModel;
