const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minlength: [3, "Name must be at least 3 chars."]
  },
  type: {
    type: String,
    required: [true, "Type is required."],
    minlength: [3, "Type must be at least 3 chars."]
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
    minlength: [3, "Description must be at least 3 chars."]
  },
  skillOne: {
    type: String,
    required: false
  },
  skillTwo: {
    type: String,
    required: false
  },
  skillThree: {
    type: String,
    required: false
  },
}, {timestamps: true});

module.exports.Pets = mongoose.model("Pet", PetSchema);