const Joi = require("joi");

function validateMovie(movie) {
  const currentYear = new Date().getFullYear();

  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    year: Joi.number().min(1900).max(currentYear).required(),
  });

  return schema.validate(movie);
}

module.exports = validateMovie;
