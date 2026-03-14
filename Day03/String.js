//1

function lengthOfLastWord(word) {
  let words = word.split(" ");
  let lastWord = words[words.length - 1];
  return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));

//2

function lengthOfLastWord(word) {
  let words = word.trim().split(" ");
  let lastWord = words[words.length - 1];
  return lastWord.length;
}

console.log(lengthOfLastWord(" fly me to the moon "));


//3
function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().split(" ").join("").split("").sort().join("");
  let s2 = str2.toLowerCase().split(" ").join("").split("").sort().join("");

  return s1 === s2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("deepika", "world"));