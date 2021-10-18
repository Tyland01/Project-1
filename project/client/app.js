window.addEventListener("DOMContentLoaded", start);

function start() {
  let timer = document.getElementById("timer");
  let shuffledLetters = document.querySelector(".shuffledLetters");
  let chosenLetters = document.querySelector(".chosenLetters input");
  let correctWords = document.querySelector(".correctWords");
  let Reshuffle = document.querySelector("Reshuffle");
  let remWords = document.querySelector("remWords");
  let wordsFound = document.querySelector("wordsFound");
  let correctWordsList = [];

  let words =
    "evasive internal x-ray bare eatable jelly military surprise slap guttural one physical window contain deserve compare stroke dad decay gratis tasty breakable available succeed expand clover dispensable dirty scratch things";

  let wordsCompare = words.split(" ");
  let uppercased = wordsCompare.map((wordCompare) => wordCompare.toUpperCase());
  remWords.innerHTML = uppercased.length;
  wordsFound.innerHTML = 0;
  setInterval(function () {
    timer.innerHTML = minute + " : " + sec;
    sec--;
    if (sec === 00) {
      minute--;
      sec = 60;
      if (minute < 2) {
        timer.style.color = "red";
      }

      if (minute < 0) {
        alert("Out Of Time");
        location.reload();
      }
    }
  }, 1000);

  const word = "carpenter";
  let wordArr = word.split("");
  let sortedArr = wordArr.sort((a, b) => 0.5 - Math.random());

  function display() {
    for (i = 0; i < sortedArr.length; i++) {
      let letters = document.createElement("h1");
      letters.innerHTML = sortedArr[i];
      shuffledLetters.appendChild(letters);
    }
  }
  display();
}
