let str = "Testleaf";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str.charAt(i);
}

console.log("Reversed string is : ", rev);

if (str === rev) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}