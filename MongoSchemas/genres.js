const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  id: String,
  name: String,
  picture: String
});

mongoose.model("genres", genreSchema);
