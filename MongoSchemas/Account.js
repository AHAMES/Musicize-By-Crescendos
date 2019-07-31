const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = require("./user");
const account = new Schema({
  googleId: String,
  user: userSchema
});

mongoose.model("account", account);
