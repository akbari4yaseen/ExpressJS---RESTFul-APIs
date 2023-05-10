const mongoose = require("mongoose");
const currentYear = new Date().getFullYear();

// Model
const Movie = new mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: { type: String, required: true, minlength: 3, maxlength: 128 },
    year: { type: Number, required: true, min: 1900, max: currentYear },
  })
);

module.exports = Movie;
