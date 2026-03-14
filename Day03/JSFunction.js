//TASK1
function userProfile(name)
{
    console.log("Hello, " +name+ "!");
}
userProfile("Deepika")

//TASK2
const double=(number) =>
{
 return number * 2
}
console.log(double(20))

//TASK3
setTimeout(function(){
    console.log("this message is delayed by 2 seconds")
},2000)

//TASK4
function getUserData(callback) {
  setTimeout(function () {
    callback();
  }, 3000);
}

getUserData(function () {
  console.log("Call Back Function");
});