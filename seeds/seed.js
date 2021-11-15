let mongoose = require("mongoose");
let Workout = require("../models/workout");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false
});

let workoutSeed = [
  {
    exercise: [
      {
        type: "resistance",
        name: "bench press",
        duration: 30,
        weight: 185,
        reps: 5,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 5),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "deadlift",
        duration: 30,
        weight: 315,
        reps: 5,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 4),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "squat",
        duration: 10,
        weight: 225,
        reps: 10,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 3),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "lat pulldowns",
        duration: 10,
        weight: 150,
        reps: 12,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 3),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "preacher curls",
        duration: 15,
        weight: 45,
        reps: 12,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 3),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "shoulder press",
        duration: 15,
        weight: 185,
        reps: 12,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 2),
  },
  {
    exercise: [
      {
        type: "resistance",
        name: "mid rows",
        duration: 15,
        weight: 110,
        reps: 12,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate() - 1),
  },
  {
    exercise: [
      {
        type: "cardio",
        name: "jump rope",
        duration: 15,
        weight: 110,
        reps: 12,
        sets: 5,
      },
    ],
    day: new Date().setDate(new Date().getDate()),
  },
];

Workout.deleteMany({})
  .then(() => Workout.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
