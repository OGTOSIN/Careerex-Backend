// Assignment Instructions

// Instructions:

// Write clear and readable code for each question.
// Comment your code to explain what it's doing.
// Use only the concepts we've covered: variables, strings, numbers, booleans, arrays, and simple logic.
// Push your work to GitHub and submit the link.




// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.

//Full Name of the Backend Developer
const fullName = "Oluwatosin Oguntoyinbo"; 

//The age of the Backend Developer
const age = 27; 

//The nationality of the Backend Developer
const nationality = "Nigeria";

//Introduction of the Backend Developer by combining each variable to make a sentence
const introduction = `Hello, My name is ${fullName}, I am ${age} years old and I am from ${nationality}.`; //ES6

console.log(" ");
console.log(introduction);
console.log(" ");




// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.

//My Favourite Quote at the time!
let favoriteQuote = "You cannot keep doing things the same way and expect a different result!";

//The output of my fav quote in upper case
console.log(favoriteQuote.toUpperCase());

//The output of my fav quote in lower case
console.log(favoriteQuote.toLowerCase());
console.log(" ");



// 3.Take a word and rearrange it in reverse order, then log the reversed word.


//TEST
// let original = "Ade";
// console.log(original);

// let split = original.split("");
// console.log(split);

// let reverse = split.reverse("");
// console.log(reverse);

// let join = reverse.join("");
// console.log(join);

//The word to be reversed
let revWord = "Racecar"

// The logic behind the reversing of the word
let output = revWord.split("").reverse("").join("")

// The output of the word in reverse order
console.log(output);
console.log(" ");


// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.

//My wishlist items
//The price of the items on my wishlist
laptop = 750000;
smartPhone = 350000;
miscExp = 1000000;

// The addition of  total on my wishlist
//The total price of the items on my wishlist
wishTotal = laptop + smartPhone + miscExp;

// The output of the item's total on my wishlist
//The total money needed to buy the items on my wishlist
console.log("The total money needed is about " + wishTotal + " to buy the items on my wishlist") //ES5
console.log(" ");




// 5.Find the average of 5 test scores stored in variables. Display the average with a message.

//The list of 5  test scores
//The test scores of the Backend Developer
mathTestScore = 75;
englishTestScore = 85;
accountTestScore = 80;
infoTechTestScore = 100;
biologyTestScore = 70;

//The average of the Test Scores
//The average test score of the Backend Developer
averageTestScore = (mathTestScore + englishTestScore + accountTestScore + infoTechTestScore + biologyTestScore) / 5

// The output of the average test's score
console.log(`The average score for the 5 test released so far is  ${averageTestScore}, I'll do better next time!`);
console.log(" ");




// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.

//An array of my favourite delicious dishes
favoriteFoods = ["Party Jollof", "Yam and Beans", "Pounded Yam and Egusi", "Yam and Garden Egg Sauce", "Home-made Akara and Pap"];

//Display item 1 on the list of my favorite food
console.log(favoriteFoods[0]);

//Display item 5 on the list of my favorite food
console.log(favoriteFoods[4]);
console.log(" ");



// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.

//Adding a new food to the beginning of my favourite food list
favoriteFoods.unshift("Beans and Plaintain");

//Adding a new food to the end of my favourite food list
favoriteFoods.push("Rice and Plaintain");


// The output of the list after adding 2 food
console.log(favoriteFoods);
console.log(" ");


// Create three arrays:


// 8.jssOne

// 9.jssTwo

// 10.jssThree

// Each array must contain 10 student names as string values.

//Names of Student in Jss One
jssOne = ["Ade", "Ore", "Ola", "Jacob", "Joseph", "Jesse", "Bola", "Ralph", "Steven", "Bukunmi"];

//Names of Student in Jss Two
jssTwo = ["Angel", "Pelumi", "Tolu", "Tracy", "Funmi", "Seun", "Emmanuel", "Tosin", "Deborah", "Ope"];

//Names of Student in Jss Three
jssThree = ["Aisha", "Mary", "Omotola", "Odunayo", "Mercy", "Morenikeji", "Faith", "Saidat", "David", "Paul"];

console.log(" ");