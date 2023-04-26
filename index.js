const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./routes/movies");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/movies", movies);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
