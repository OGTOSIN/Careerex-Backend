// Assignment Instructions
// Assigned

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
const introduction = `My name is ${fullName}, I am ${age} years old and I am from ${nationality}.`;

console.log(introduction);



// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.

//My Favourite Quote at the time!
let favoriteQuote = "You cannot keep doing things the same way and expect a different result!"

//The output of my fav quote in upper case
console.log(favoriteQuote.toUpperCase());

//The output of my fav quote in lower case
console.log(favoriteQuote.toLowerCase());



// 3.Take a word and rearrange it in reverse order, then log the reversed word.

const revWord = "Rearrange";

// console.log(revWord.reverse())

// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.

//My wishlist items
laptop = 750000;
smartPhone = 350000;
miscExp = 1000000;

// The addition of  total on my wishlist
wishTotal = laptop + smartPhone + miscExp;

// The output of the item's total on my wishlist
console.log(`The total money needed is about ${wishTotal} to buy the items on my wishlist`) //ES6
console.log("The total money needed is about " + wishTotal + " to buy the items on my wishlist") //ES5



// 5.Find the average of 5 test scores stored in variables. Display the average with a message.

//The list of 5  test scores
mathTestScore = 75;
englishTestScore = 85;
accountTestScore = 80;
infoTechTestScore = 100;
biologyTestScore = 70;

//The average of the Test Scores
averageTestScore = (mathTestScore + englishTestScore + accountTestScore + infoTechTestScore + biologyTestScore) / 5

// The output of the average test's score
console.log(`The average score for the 5 test released so far is  ${averageTestScore}.`)


// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.

//An array of my favourite delicious dishes
favoriteFoods = ["Party Jollof", "Yam and Beans", "Pounded Yam and Egusi", "Yam and Garden Egg Sauce", "Fruit Salad with Vegetables"];

//Display item 1 on the list of my favorite food
console.log(favoriteFoods[0]);

//Display item 5 on the list of my favorite food
console.log(favoriteFoods[4]);

// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.

//Adding a new food to the beginning of my fvourite list
favoriteFoods.unshift("Beans and Plaintain");


//Adding a new food to the end of my fvourite list
favoriteFoods.push("Rice and Plaintain");

// The output of the list after adding 2 more food to the list
console.log(favoriteFoods);



// Create three arrays:



// 8.jssOne

// 9.jssTwo

// 10.jssThree


// Each array must contain 10 student names as string values.