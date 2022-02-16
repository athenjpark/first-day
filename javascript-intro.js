console.log("Hello World");
let currentCity = "San Diego";
if(currentCity === "San Francisco"){
  console.log("You live in San Diego");
}
else {
  console.log("You do not live in San Diego");
}
console.log(2>0 && 0>5);
console.log(2>0 || 0<5);
console.log(0>2 || 0>5);
console.log(0>2 || 5>0);
console.log(!false && !true);
console.log(!(false && false));

console.log("Hello World".length)
var favoriteFood = "Spaghetti";
console.log(favoriteFood.length)

console.log("Hello World"[0]);
console.log(favoriteFood.toUpperCase())
console.log(favoriteFood.toLowerCase())
//finding a character at a particular index
console.log(favoriteFood.charAt(2))
//finding the index of the first character
console.log(favoriteFood.indexOf("t"))
//does my string include a subset of characters inside of interval
console.log(favoriteFood.includes("spa"))
//give me a subset of characters from my string
console.log(favoriteFood.slice(1,4))
