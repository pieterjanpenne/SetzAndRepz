const Workout = require("../models/workoutModel");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
};

const createWorkout = async (req, res) => {
  const { exercise, sets, reps, weight } = req.body;
  const workout = new Workout({ exercise, sets, reps, weight });
  await workout.save();
  res.status(201).json(workout);
};

module.exports = { getWorkouts, createWorkout };
