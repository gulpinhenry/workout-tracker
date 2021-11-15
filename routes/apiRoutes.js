const router = require("express").Router();
const Workout = require("../models/workout.js");

// get workouts
router.get("/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find({}).sort({ date: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add another workout
router.post("/workouts", async ({ body }, res) => {
  try {
    const workoutData = await Workout.create(body);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add exercise to a workout with api/workouts/:uid
router.put("/workouts/:id", async ({ body }, res) => {
  try {
    const workoutData = await Workout.updateOne(body);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get workouts in range api/workouts/range
router.get("/workouts/range", async (req, res) => {
  try {
    const workoutData = await Workout.find({}).sort({ date: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
