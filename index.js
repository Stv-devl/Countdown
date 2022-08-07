//variables
const form = document.querySelector("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");
let totalSeconds;
let interval;

function countDown() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let sec = seconds < 10 ? "0" + seconds : seconds; //for have 2 number on display
  let min = minutes < 10 ? "0" + minutes : minutes; //for have 2 number on display
  if (totalSeconds > 0) {
    totalSeconds--; //-1 sec every second
    countdownDisplay.textContent = `${min} : ${sec}`;
  } else {
    countdownDisplay.textContent = `It's finish`;
    clearInterval(interval); //clear interval if its finish
  }
  console.log(choice.value);
  console.log(minutes, seconds);
  console.log(totalSeconds);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    //if its not a number
    alert("Please write a number");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = ""; //clear form
    clearInterval(interval); //clear interval when we click again
    interval = setInterval(countDown, 1000); //repeat function every sec
  }
});
