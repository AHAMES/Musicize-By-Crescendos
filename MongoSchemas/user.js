const mongoose = require("mongoose");
const performerAccount = require("./performerAccount");
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true]
  },
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  isPerformer: {
    type: Boolean,
    required: [true],
    default: false
  },
  created: {
    type: Date,
    default: Date.now(),
    required: [true, "Created date is required"]
  },
  performerAccount: {
    type: performerAccount,
    required: [false],
    default: null
  },
  state: String,
  country: String,
  email: String,
  password: {
    type: String
  }
});

mongoose.model("users", userSchema);
