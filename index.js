const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./routes/movies");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDBuri = "mongodb://127.0.0.1/movie";
connect(mongoDBuri)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((er) => {
    console.error("Could not connect to MongoDB: ", er.reason);
  });

async function connect(uri) {
  await mongoose.connect(uri);
}

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/movies", movies);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
