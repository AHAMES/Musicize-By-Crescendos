const mongoose = require("mongoose");

const genre = require("./genres");
const performerContent = require("./performerContent");
const performerAccountSchema = new mongoose.Schema({
  profileImage: {
    type: String
  },
  description: {
    type: String,
    default: ""
  },
  coverImage: String,
  ratePerhour: { type: Number, default: 500 },
  stageName: {
    type: String,
    required: [false, "Username is required"]
  },
  performerType: {
    type: String,
    default: "Musician"
  },
  genres: { type: [String], default: [] },

  Content: { type: [performerContent], default: [] },

  ratings: { type: [Number], default: [] }
});

mongoose.model("performerAccount", performerAccountSchema);
