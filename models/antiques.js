const mongoose = require('mongoose');


const antiqueSchema = new mongoose.Schema({
  name: { type: String, required: true},
  brand: String,
  yearMade: { type: Date, required: true},
  Owners: [{
    name: { type: String, required: false},
    country: {type: String, required: false},
    yearPurchased: {type: Date, required: false}
  }],
});

const Antique = mongoose.model('Antique', antiqueSchema);

module.exports = Antique;
