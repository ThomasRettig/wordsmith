// Randomly select words from object and place into DOM
const word = words[Math.floor(Math.random()*words.length)];

const wordName = word.word;
const wordType = word.wordtype;
const wordDefinition = word.definition;
const wordSynonyms = word.synonyms;

document.querySelector('.js-word').innerHTML = wordName;
document.querySelector('.js-type').innerHTML = wordType;
document.querySelector('.js-definition').innerHTML = wordDefinition;
document.querySelector('.js-synonyms').innerHTML = wordSynonyms;
document.querySelector('.js-dict-link').setAttribute('href', `https://www.merriam-webster.com/dictionary/${wordName}`);

// modify array
function nextVal(arr) {
	firstElm = arr.shift();
	arr.push(firstElm);
	backgroundColorDelta(firstElm);
	return arr;
}

// set background color
function backgroundColorDelta (firstElm) {
	document.getElementsByTagName('body')[0].style.backgroundColor = firstElm;
}

if (localStorage.getItem('localColorArr') === null) {
	//set array first time if it doesn't exist
	var colorsArr = ['#5F0B0D', '#5E2136', '#4F325C', '#214187', '#253764', '#1F2942', '#0F151F', '#132521', '#16321F', '#183319', '#1B383D', '#1E3C62', '#214186', '#362F5E', '#4A1D35'];
	localStorage.setItem('localColorArr', JSON.stringify(colorsArr));
	var localColorArr = JSON.parse(localStorage.getItem('localColorArr'));
} else {
	var localColorArr = JSON.parse(localStorage.getItem('localColorArr'));
	//modify array
	modifiedColors = nextVal(localColorArr);
	// set setLocalStorage = modifiedArray;
	localStorage.setItem('localColorArr', JSON.stringify(modifiedColors));
}

document.getElementById('reload').addEventListener('click', () => {
  window.location.reload();
})

document.title = (
  (new Date()).toTimeString().split(':').slice(0,2).join(':') +
  ' — ' + (new Date()).toDateString()
)