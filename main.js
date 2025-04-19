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

let counter = 0; 

setInterval(() => {

    document.getElementById("msg").textContent = counter; 
}, 6000);
