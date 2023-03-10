// Test case 1: Tests that the function removes a word from the text
it('Should remove the word "muppeteer" from the text', () => {
  let text = "Hello there muppeteer, how are you today?";
  let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let filteredText = removeWords(text, wordsToRemove);
  expect(filteredText).toBe("Hello there, how are you today?");
});

// Test case 2: Tests that the function removes multiple words from the text
it('Should remove multiple words from the text', () => {
  let text = "Hello there muppeteer, zoinks how are you today?";
  let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let filteredText = removeWords(text, wordsToRemove);
  expect(filteredText).toBe("Hello there, how are you today?");
});

// Test case 3: Tests that the function removes words regardless of case
it('Should remove words regardless of case', () => {
  let text = "Hello there MuPpeteer, how are you today?";
  let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let filteredText = removeWords(text, wordsToRemove);
  expect(filteredText).toBe("Hello there, how are you today?");
});

// Test case 4: Tests that the function does not remove a word that is not in the list of words to remove
it('Should not remove a word that is not in the list of words to remove', () => {
  let text = "Hello there, how are you today?";
  let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let filteredText = removeWords(text, wordsToRemove);
  expect(filteredText).toBe("Hello there, how are you today?");
});