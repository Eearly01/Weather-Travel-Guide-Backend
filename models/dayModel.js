const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
	city: String,
	temperature: { type: Number, required: true },
	windSpeed: { type: Number, required: true },
	windDirection: String,
	probabilityOfPrecipitation: { value: {type: Number, default: 0} },
	detailedForcast: String,
});

const dayModel = mongoose.model('day', daySchema);

module.exports = dayModel;
