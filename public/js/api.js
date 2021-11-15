const API = {
  // create new workout
  async createWorkout(data = {}) {
    const res = await fetch("/api.workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  },
  // add exercise to workout
  // get last workout
  // get ranges of workout
};
