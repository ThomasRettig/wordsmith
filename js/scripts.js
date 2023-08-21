// Randomly select a word
const randomWord = words[Math.floor(Math.random() * words.length)];

const {
  word: wordName,
  wordtype: wordType,
  definition: wordDefinition,
  synonyms: wordSynonyms,
} = randomWord;

document.querySelector(".js-word").innerHTML = wordName;
document.querySelector(".js-type").innerHTML = wordType;
document.querySelector(".js-definition").innerHTML = wordDefinition;
document.querySelector(".js-synonyms").innerHTML = wordSynonyms;

// Rotate the colors array
function rotateArray(arr) {
  const [firstElement, ...rest] = arr;
  return [...rest, firstElement];
}

const colorsArr = [
  "#5F0B0D", "#5E2136", "#4F325C", "#214187", "#253764",
  "#1F2942", "#0F151F", "#132521", "#16321F", "#183319",
  "#1B383D", "#1E3C62", "#214186", "#362F5E", "#4A1D35"
];

const localColorArr = JSON.parse(localStorage.getItem("localColorArr")) || colorsArr;
const modifiedColors = rotateArray(localColorArr);
localStorage.setItem("localColorArr", JSON.stringify(modifiedColors));

// Change the background color
document.body.style.backgroundColor = modifiedColors[0];

// Sharing functionality
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
};

document.getElementById("copy").addEventListener("click", () => {
  copyToClipboard("word");
});

document.getElementById("share").addEventListener("click", () => {
  navigator.share({
    title: `New word — ${wordName}!`,
    text: `I learnt a new word called “${wordName}” today via Wordsmith, a web-based app that allows you to learn challenging vocabulary on the go!`,
    url: window.location.href,
  });
});

// Handle refreshing
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    window.location.reload();
  }
});

document.getElementById("reload").addEventListener("click", () => {
  window.location.reload();
});

// On mobile
let touchstartY;
let touchendY;
    
function checkDirection() {
  if (touchendY > touchstartY) {
    window.location.reload();
  }
};

document.addEventListener("touchstart", (e) => {
  touchstartY = e.changedTouches[0].screenY
});

document.addEventListener("touchend", (e) => {
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
});
