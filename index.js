// Créer la logique de compte à rebours

// Créer un événement à la validation du form pour lancer le compte à rebours
// variable

const form = document.querySelector("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");
let totalSeconds = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  countDown();
  choice.value = "";
});

function countDown() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  if (totalSeconds > 0) {
    totalSeconds = totalSeconds - 1;
    countdownDisplay.innerHTML = `${minutes}.${seconds}`;
  }
  if (totalSeconds == 0) countdownDisplay.innerHTML = `write a number`;
  console.log(choice.value);
  console.log(minutes, seconds);
  console.log(totalSeconds);
}
setInterval(countDown, 1000);
