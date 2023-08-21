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
document.querySelector(".js-dict-link").setAttribute("href", `https://www.merriam-webster.com/dictionary/${wordName}`);

// Rotate the colors array
function rotateArray(arr) {
  const [firstElement, ...rest] = arr;
  arr.push(firstElement);
  return rest;
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

// Handle refreshing
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    window.location.reload();
  }
});

document.getElementById("reload").addEventListener("click", () => {
  window.location.reload();
});
