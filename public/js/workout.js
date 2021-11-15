function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(options);
}

function aggregateExercise(exercises) {
  const sum = exercises.reduce((total, cur) => {
    if (cur.type == "resistance") {
      total.totalWeight = (total.totalWeight || 0) + cur.weight;
      total.totalSets = (total.totalSets || 0) + cur.sets;
      total.totalReps = (total.totalReps || 0) + cur.reps;
      total.totalDuration = (total.totalDuration || 0) + cur.duration;
    } else if (cur.type === "cardio") {
      total.totalDistance = (total.totalDistance || 0) + cur.distance;
      total.totalDuration = (total.totalDuration || 0) + cur.duration;
    }
    return total;
  }, {});
  return sum;
}

function renderSummary(summary) {
  const container = document.querySelector(".workout-stats");
  const mapObj = {
    date: "Date",
    totalDuration: "Total Workout Duration (minutes)",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted (lbs)",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered (miles)",
  };
  Object.keys(summary).forEach((el) => {
    const p = document.createElement("p");

    p.textContent = mapObj[el];
    const textNode = document.createTextNode(`: ${summary[el]}`);

    // p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

function renderNoWorkout() {
  const container = document.querySelector(".workout-stats");
  const p = document.createElement("p");
  p.textContent = "No Workouts Available";
  container.appendChild(p);
}
async function initWorkout() {
  try {
    const prev = await API.getLastWorkout();
    if (prev) {
      document
        .querySelector("a[href='/exercise?']")
        .setAttribute("href", `/exercise?id=${prev._id}`);
      console.log(prev);
      const summary = {
        date: formatDate(prev.day),
        totalDuration: prev.totalDuration,
        numExercises: prev.exercise.length,
        ...aggregateExercise(prev.exercise),
      };
      renderSummary(summary);
    } else {
      renderNoWorkout();
    }
  } catch (err) {
    console.log(err);
  }
}

initWorkout();
