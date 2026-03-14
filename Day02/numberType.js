function number(num)
{
  if (num > 0) {
    return "Positive number";
  } 
  else if (num < 0) {
    return "Negative number";
  } 
  else {
    return "Zero";
  }
}

console.log(number(10));  // Positive number
console.log(number(-5));  // Negative number
console.log(number(0));

