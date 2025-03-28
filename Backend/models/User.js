const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  roomNumber: { type: String },
  roomType: { type: String },
  roomSize: { type: String },
  rentPrice: { type: Number },
  contractStartDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);