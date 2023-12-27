const mongoose = require("mongoose");

const generalType = {
  comprehensive: String,
  standard: String,
};

const paintingType = {
  alloy: String,
  fullBody: String,
  perpanel: String,
};

const batteryType = {
  batteryOrTyre: String,
  accessories: String,
};

const checkupType = {
  generalHealth: String,
  otherServices: String,
};

const acType = {
  acService: String,
  electricalRepair: String,
};
const types= {
    general: generalType,
    painting: paintingType,
    battery: batteryType,
    checkup: checkupType,
    ac: acType,
  }

const carServicesSchema = new mongoose.Schema({
  carCompany: String,
  carModel: { type: String, unique: true },
  petrol: types,
  diesel: types,
  gas: types,
});

module.exports = mongoose.model('CarServices', carServicesSchema);
