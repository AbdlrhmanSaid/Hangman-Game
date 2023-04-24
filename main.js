//  Letters
const letters = "abcdefghijgklmnopqrstuvwxyz123456789=+-():";

// Array From Letters
let lettersArray = Array.from(letters);

//Select letters Containers
let lettersContainers = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letters) => {
  // Create span
  let span = document.createElement("span");

  //Create Text node
  let Txt = document.createTextNode(letters);

  //add class on span
  span.className = "letter-box";

  //Append text in span
  span.appendChild(Txt);

  //Append span in letters container
  lettersContainers.appendChild(span);
});

//  object of word + categorys
const words = {
  programming: [
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
  ],
  movies: [
    "The Shawshank Redemption",
    "The Godfather",
    "Titanic",
    "The Dark Knight",
    "Forrest Gump",
    "Star Wars: The Force Awakens",
    "Avengers: Endgame",
    "Jurassic Park",
  ],
  people: [
    "Mohammed",
    "Fatima",
    "Ali",
    "Sarah",
    "Youssef",
    "Layla",
    "Ahmed",
    "Nour",
  ],
  countries: [
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
    "Morocco",
    "Lebanon",
    "Jordan",
    "Iraq",
    "Tunisia",
  ],
};

// get random property
let allkeys = Object.keys(words);

// random numbers depend on keys length
let randomPropNum = Math.floor(Math.random() * allkeys.length);

// category
let randomPropName = allkeys[randomPropNum];

// category words
let randomPropValue = words[randomPropName];

// random number depend on words
let randomVlaueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomVlaueVlaue = randomPropValue[randomVlaueNumber];
console.log(randomVlaueVlaue);

// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// select letter guess element
let letterGuessContainer = document.querySelector(".letters-guess");
// convert chosen word to array
let lettersAndSpace = Array.from(randomVlaueVlaue);

// create spans depend on word
lettersAndSpace.forEach((letter) => {
  // create empty span
  let span = document.createElement("span");

  // if letter is space
  if (letter === " ") {
    // add class to span
    span.className = "with-space";
  }

  // append span to letter guess element
  letterGuessContainer.appendChild(span);
});
// select guess spans
let GuessSpans = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// selcet the draw element
let theDraw = document.querySelector(".hangman-draw");

// handle clicked
document.addEventListener("click", (e) => {
  // set the chose stateus
  let thestatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // the chosen word
    let theChosenWord = Array.from(randomVlaueVlaue.toLowerCase());

    // loop on letters in word
    theChosenWord.forEach((WordLetter, Wordindex) => {
      // if chosenWord = clickedLetter
      if (theClickedLetter === WordLetter) {
        // set status to correct
        thestatus = true;

        // loop on guess span
        GuessSpans.forEach((span, spanIndex) => {
          if (spanIndex === Wordindex) {
            span.innerHTML = WordLetter;
          }
        });
      }
    });
    // outside loop

    // if lettet wrong
    if (thestatus !== true) {
      //increase the wrong attempts
      wrongAttempts++;

      //add class wrong on the draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {
        // add class finshed
        lettersContainers.classList.add("finshed");
        popup.style.display = "block";
      }

      // play wrong sound
      document.getElementById("wrong").play();
    } else {
      // play wrong sound
      document.getElementById("success").play();
    }
  }
});

// select popup
let popup = document.querySelector(".popup");

// select popup elements
let p = document.querySelector(".popup p");
let btn = document.querySelector(".re");

// create txt in p
p.innerHTML = `Game Over, The Word Is ${randomVlaueVlaue}`;

btn.addEventListener("click", () => {
  location.reload();
});
