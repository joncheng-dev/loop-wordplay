$(document).ready(function () {
  $("#userInputForm").submit(function (event) {
    event.preventDefault();

    // Collects user's input sentence.
    const userSentence = $("input#sentence1").val();

    // Splits the user's input sentence into an array.
    const splitSentence = userSentence.split(" ");

    // New array.
    const longWords = [];
    // Loop through splitSentence array.
    splitSentence.forEach(function (word) {
      // Build a new array from every word in sentence that is 3 or more characters in length.
      if (word.length >= 3) {
        // Add this word into a new combined array.
        longWords.push(word);
      }
    });

    // Reverse order of this new array.
    longWords.reverse();

    // Join all elements of array into one string.
    const joinedWords = longWords.join("");

    // Sends the reorganized text to the spot on html page.
    $("#outputSentence").text(joinedWords);

    // Unhides the result on html page.
    $("#displayResult").show();
  });
});
