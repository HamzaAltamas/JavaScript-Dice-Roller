let heading = document.querySelectorAll(".heading");
let headingArr = Array.from(heading);
let DiceImg = document.querySelector(".DiceImg");
let rollDice = document.querySelector(".rollDice");
let stopDice = document.querySelector(".stopDice");
let numberShuffle = document.querySelector(".numberShuffle");

let count = 0;
function headingColor() {
  if (headingArr[count].classList.contains("white")) {
    headingArr[count].classList.add("red");
    headingArr[count].classList.remove("white");
  }
  count++;
  if (headingArr.length === count) {
    count = 0;
  }
  headingArr[count].classList.add("white");
}
let headingColorInterval = setInterval(() => {
  headingColor();
}, 200);

rollDice.addEventListener("click", () => {
  numberShuffle.classList.add("shuffleColorChange");
  DiceImg.classList.add("diceRolling");
  let Rolling = setInterval(() => {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    DiceImg.src = `images/dice-${randomNum}.png`;
    numberShuffle.innerHTML = randomNum;
    console.log(randomNum);
  }, 50);
  stopDice.addEventListener("click", () => {
    clearInterval(Rolling);
    DiceImg.classList.remove("diceRolling");
  });
});
