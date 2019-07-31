const mongoose = require("mongoose");

const performerContentSchema = new mongoose.Schema({
  contentLink: String,
  contentType: String
});

mongoose.model("performerContent", performerContentSchema);
