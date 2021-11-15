
// enables or disables button of getting previous workout if there is none
async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#cont-btn").classList.add("d-none")
    }
  }
}

init();