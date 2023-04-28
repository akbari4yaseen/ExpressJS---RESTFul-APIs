const express = require("express");
const Joi = require("joi");
const router = express.Router();
const movies = require("../data/movies");

// list Movies (get all)
router.get("/", (req, res) => {
  res.json(movies);
});

// get movie by id
router.get("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    res.status(404).send("The movie with the given ID was not found.");
    return;
  }
  res.json(movie);
});

// add new movie
router.post("/", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    year: req.body.year,
  };
  movies.push(movie);
  res.json(movie);
});

// update movie
router.put("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    res.status(404).send("The movie with the given ID was not found.");
    return;
  }

  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  movie.title = req.body.title;
  movie.year = req.body.year;
  res.json(movie);
});

// delete movie
router.delete("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    res.status(404).send("The movie with the given ID was not found.");
    return;
  }

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.json(movie);
});

// get movie by year
router.get("/year/:year", (req, res) => {
  const movie = movies.find((m) => m.year === parseInt(req.params.year));
  if (!movie) {
    res.status(404).send("The movie with the given year was not found.");
    return;
  }
  res.json(movie);
});

// get movie by title (contains)
router.get("/title/:title", (req, res) => {
  const movie = movies.find((m) => m.title.includes(req.params.title));
  if (!movie) {
    res.status(404).send("The movie with the given title was not found.");
    return;
  }
  res.json(movie);
});

function validateMovie(movie) {
  const currentYear = new Date().getFullYear();

  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    year: Joi.number().min(1900).max(currentYear).required(),
  });

  return schema.validate(movie);
}

module.exports = router;
