// alert("boo");

//Initialized Variables
const form = document.querySelector("form"),
  inputGuess = document.querySelector("#inputGuess"),
  submitGuess = document.querySelector(".submitGuess"),
  chancesEL = document.querySelector(".chances"),
  oldGuesses = document.querySelector(".oldGuesses");

let displayWord = document.querySelector(".word");
let displayString = "";

// Words
const wordList = [
  "helloa",
  "worlda",
  "lmao",
  "cba",
  "cheerioa",
  "wag1",
  "okay",
  "ok",
];
myNum = Math.floor(Math.random() * wordList.length);
const myWord = wordList[myNum];

// Blank under scores
for (let i = 0; i < myWord.length; i++) {
  displayString += "_";
}

displayWord.textContent = displayString;

form.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();

  //Initialize value
  const letter = inputGuess.value;
  const chances = chancesEL.textContent;

  console.log(letter);

  if (myWord.includes(letter)) {
    rightGuess(letter);
  } else {
    // Decrement count
    const count = parseInt(chances) - 1;
    chancesEL.textContent = count;
    wrongGuess(count);

    // Append to Previous Guesses
    oldGuesses.textContent += " " + letter.toUpperCase();
  }
  //   }

  //Clearing on reset
  form.reset();
});

//
// Functions
//
let stringArr = displayString.split("");

function rightGuess(letter) {
  // New word variable
  let tempWord = "";
  for (let i = 0; i < myWord.length; i++) {
    if (myWord[i] == letter) {
      stringArr[i] = letter;
    }
  }
  displayString = stringArr.join("");
  displayWord.textContent = displayString;

  if (displayWord.textContent == myWord) {
    youWon();
  }
}

function wrongGuess(count) {
  if (count <= 0) {
    youLost();
  }
}

function youLost() {
  alert("You lost");
  location.reload();
}
function youWon() {
  alert("You won!");
  location.reload();
}

//
// Citations
//

/*
myWord.includes()
    I got this as a little hint from Aaron in class.
    It's a method to check if your word contains a letter

Math.randon();
    I knew of this method, but not the full syntax so I watched a video on it
    Link: https://www.youtube.com/watch?v=gTfjA95ONSQ


*/
// let firstString = "cat";

// firstString = firstString.split("");

// console.log(firstString);

// firstString[1] = "o";

// console.log(firstString.join(""));
// stringArr.replaceAt(i, letter);
// console.log(stringArr.join(""));
