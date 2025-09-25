const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  exercise: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
});

module.exports = mongoose.model("Workout", workoutSchema);
