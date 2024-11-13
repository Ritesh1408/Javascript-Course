// const clock = document.getElementById('clock');



// setInterval(function() {
//     let date = new Date();
//     // console.log(date.toLocaleDateString());
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

// JavaScript for displaying and updating time every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Update clock every second and apply tick effect
  setInterval(() => {
    updateClock();
    document.getElementById("clock").classList.toggle("tick");
  }, 1000);

  // Initial call to display the time immediately on load
  updateClock();


