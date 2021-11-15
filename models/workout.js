const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        defualt: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  day: {
      type: Date,
      default: Date.now
  },
  // is this part necessary
  totalDuration: {
      type: Number,
      default: 0,
  }
});
// make schema

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
