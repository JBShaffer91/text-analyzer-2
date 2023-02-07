// Test case 1: Tests that the function removes a word from the text
it('Should remove the word "muppeteer" from the text', () => {
  let text = "Hello there muppeteer, how are you today?";
  let wordsToRemove = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let filteredText = removeWords(text, wordsToRemove);
  expect(filteredText).toBe("Hello there, how are you today?");
});
