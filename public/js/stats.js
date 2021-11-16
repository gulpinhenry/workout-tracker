const firstCtx = document.getElementById("first").getContext("2d");
const secCtx = document.getElementById("second").getContext("2d");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getDuration(data){
    let sum = [];

    data.forEach((workout) => {
      const durationTotal = workout.exercise.reduce((sum, { duration }) => {
       return sum + duration;
      }, 0);
      sum.push(durationTotal);
    });
  
    return sum;
}

function getDay(data){
    let arr = [];
    data.map(({ day }) => {
        const date = new Date(day);
        console.log(date.getDay());
        arr.push(days[date.getDay()]);
    });
    //console.log(arr);
    return arr;
}
function getWeight(data){

}
// function getWorkouts(data){

// }
async function populate(data) {
    console.log(data);
  const label = getDay(data);
  const durations = getDuration(data);
  const lbs = getWeight(data);
//   const workouts = getWorkouts(data);
    console.log(durations);
  const durationChart = new Chart(firstCtx, {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          label: 'Workout Duration In Minutes',
          backgroundColor: 'red',
          borderColor: 'red',
          data: durations,
        },
      ],
    },
  });
  const weightChart = new Chart(secCtx, {
      type: 'bar',
      data:{
          labels: label,
          datasets: [
            {
                label: 'Total Weight Per Workout',
                backgroundColor: 'red',
                borderColor: 'red',
                data: lbs,
              },
          ]
      }
  })
}

API.getWorkoutsInRange().then(populate);
