
//Write a recursive function that reverses the order of words in a sentence.
// For instance, "I am a cat" should become "cat a am I".

const reverseString = (string) => {
  if (string === ""){
    return "";
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}