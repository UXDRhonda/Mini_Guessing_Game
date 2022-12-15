/*
- The page should display 3 boxes

- One of the boxes is randomly chosen as the "correct" box

- Clicking on one of the boxes will either create a win, or a lose

- A message "You Win" or "You Lose" should be displayed on the page

 -A reset button to reset the box colors and choose a new random box
 */

const container = document.querySelector("#container") 
const boxes = [...document.querySelectorAll("#container > div")] 
const button = document.querySelector("button");
let randomNum = Math.floor(Math.random() * 3)
let message = document.getElementById("statusText")

boxes.addEventListener("click", function(event) {
  for( let i = 0; i < boxes.length; i++){
    boxes[i].className = "";
  }
  randomNum = Math.floor(Math.random() * 3)
  message.innerText = "Guess the Box!";
})

container.addEventListener("click", function(event) {
  let target = event.target;
  if(target.id = "") {
    for( let i = 0; i < boxes.length; i++){
      if( boxes[i].className !== "");
    }
    return; //This ends the function execution
  }
  let index = event.index;
  if(index.id == randomNum) {
    target.className = "green";
    message.innerText="You WIN!"
  }else(index.id !== randomNum) {
    target.className = "red"
    message.innerText="You LOSE!"
  }
    
})

button.addEventListener("click", reset());









//Initial Game State
//  let player;
// let playerOptions = ["", "", ""];
// const winningConditions = [[0,1,2]];
// let isGameActive = false;

// initializeGame();

// function initializeGame() {
//   boxes.forEach(box => box.addEventListener("click", boxClicked));
//   resetBtn.addEventListener("click", resetGame);
//   statusText.textContent = `GUESS THE BOX!`;
//   isGameActive = true;
// }



// function resetGame() {

// }






 



