const mongoose = require("mongoose");

const RestSchema = mongoose.Schema({
  // id: {
  //     type: Number,
  //     required:true,
  // },
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", RestSchema);
