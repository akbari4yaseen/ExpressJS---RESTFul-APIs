const express = require("express");
const validateMovie = require("../middleware/validation");
const router = express.Router();
const {
  listMovies,
  createMovie,
  getMovie,
  getMoviesByTitle,
  getMoviesByYear,
  updateMovie,
  deleteMovie,
} = require("../controller/movie");

// list Movies (get all)
router.get("/", (req, res) => {
  listMovies()
    .then((result) => {
      if (result.error) {
        res.status(500).send("Something failed." + result.error);
        return;
      }
      res.json(result.movies);
    })
    .catch((er) => {
      res.status(500).send("Something failed. " + er.reason);
    });
});

// get movie by id
router.get("/:id", (req, res) => {
  getMovie(req.params.id)
    .then((result) => {
      if (result.error) {
        res.status(404).send("The movie with the given ID was not found.");
        return;
      }
      res.json(result.movie);
    })
    .catch((er) => {
      res.status(500).send("Something failed. " + er.reason);
    });
});

// add new movie
router.post("/", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  createMovie(req.body)
    .then((result) => {
      if (result.error) {
        res.status(500).send("Something failed." + result.error);
        return;
      }
      res.json(result.movie);
    })
    .catch((er) => {
      res.status(500).send("Something failed. " + er.reason);
    });
});

// get movies by year
router.get("/year/:year", (req, res) => {
  getMoviesByYear(req.params.year)
    .then((result) => {
      if (result.error) {
        res.status(500).send("Something failed." + result.error);
        return;
      }
      res.json(result.movies);
    })
    .catch((ex) => {
      res.status(500).send("Something failed. " + ex.reason);
    });
});

// get movie by title (contains)
router.get("/title/:title", (req, res) => {
  getMoviesByTitle(req.params.title)
    .then((result) => {
      if (result.error) {
        res.status(500).send("Something failed." + result.error);
        return;
      }
      res.json(result.movies);
    })
    .catch((er) => {
      res.status(500).send("Something failed. " + er.reason);
    });
});

// update movie
router.put("/:id", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  updateMovie(req.params.id, req.body).then((result) => {
    if (result.error) {
      res.status(404).send("The movie with the given ID was not found.");
      return;
    }
    res.json(result.movie);
  });
});

// delete movie
router.delete("/:id", (req, res) => {
  deleteMovie(req.params.id)
    .then((result) => {
      if (result.error) {
        res.status(404).send("The movie with the given ID was not found.");
        return;
      }
      res.json(result.movie);
    })
    .catch((er) => {
      res.status(500).send("Something failed. " + er.reason);
    });
});

module.exports = router;
