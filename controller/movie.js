const Movie = require("../db/schema");
const validateMovie = require("../middleware/validation");

// list all movies
async function listMovies() {
  try {
    const movies = await Movie.find();
    return { movies };
  } catch (ex) {
    return { error: ex };
  }
}

// get movie by id
async function getMovie(id) {
  try {
    const movie = await Movie.findById(id);
    return { movie };
  } catch (ex) {
    return { error: ex };
  }
}

// get movies by year
async function getMoviesByYear(year) {
  try {
    const movies = await Movie.find({ year: year });
    return { movies };
  } catch (ex) {
    return { error: ex };
  }
}

// get movies by title (contains)
async function getMoviesByTitle(title) {
  try {
    const movies = await Movie.find({
      title: { $regex: title, $options: "i" },
    });
    return { movies };
  } catch (ex) {
    return { error: ex };
  }
}

// create movie
async function createMovie(data) {
  const { error } = validateMovie(data);
  if (error) {
    return { error };
  }

  try {
    const movie = new Movie({
      title: data.title,
      year: data.year,
    });
    const result = await movie.save();
    return { movie: result };
  } catch (ex) {
    return { error: ex };
  }
}

// update movie
async function updateMovie(id, data) {
  const { error } = validateMovie(data);
  if (error) {
    return { error };
  }

  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      {
        title: data.title,
        year: data.year,
      }
      // { new: true }
    );

    // return the updated movie
    return { movie };
  } catch (ex) {
    return { error: ex };
  }
}

// delete movie
async function deleteMovie(id) {
  try {
    Movie.findByIdAndRemove(id);
    return "Movie deleted";
  } catch (ex) {
    return { error: ex };
  }
}

module.exports = {
  listMovies,
  getMovie,
  getMoviesByYear,
  getMoviesByTitle,
  createMovie,
  updateMovie,
  deleteMovie,
};
