//Task 1 Timer Interval

/*
let counter = 0; 

let intervalId = setInterval(() => {
    counter++; 
    alert(`Time: ${counter}`); 
    if (counter >= 5) clearInterval(intervalId); 
}, 1000); 
*/

//task 2 Element Animation
/*
setInterval(() => {
  document.getElementById("el1").style.width = "100px";
  document.getElementById("el2").style.height += "100px";
  document.getElementById("el3").style.backgroundColor = "red";
}, 2500);
*/

//task 3 Interactive Game
/*
let timerDisplay = document.getElementById("timer");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
let counter = 0;
let timer = 6;
let countDown;

btn.addEventListener("click", () => {
  counter++;
  msg.textContent = counter;
  if (!countDown) {
    countDown = setInterval(() => {
      timer--;
      timerDisplay.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        btn.disabled = true;
      }
    }, 1000);
  }
});
*/

//task 4 controlling time

document.getElementById("submit").addEventListener("click", () => {
  let seconds = parseFloat(document.getElementById("seconds").value); 
  setTimeout(() => {
    document.getElementById("msg").textContent = "BOOM!! 💥💥";
  }, seconds * 1000);
})
