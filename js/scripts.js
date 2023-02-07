// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0 || word.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (text.trim().length === 0 || word.trim().length === 0) {
    return null;
  }
  const boldedText = text.replace(new RegExp(word, "gi"), `<strong>${word}</strong>`);
  return boldedText;
}

// Remove bad language

function removeWords(text, wordsToRemove) {
  let textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < wordsToRemove.length; j++) {
      if (textArray[i].toLowerCase() === wordsToRemove[j].toLowerCase()) {
        textArray.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return textArray.join(" ");
}

// Example usage:
let text = "Hello there muppeteer, how are you today?";
let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
let filteredText = removeWords(text, wordsToRemove);
console.log(filteredText);
// Output: "Hello there, how are you today?"


// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const filteredText = removeWords(passage, wordsToRemove);
  const wordCount = wordCounter(filteredText);
  const occurrencesOfWord = numberOfOccurrencesInText(word, filteredText);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  const boldedPassage = boldPassage(word, filteredText);
  document.getElementById("bolded-passage").innerHTML = boldedPassage;
}


window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

