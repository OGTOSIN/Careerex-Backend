// Assignment Instructions


// 1. Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)


//A function that outputs "Passed" if the score is 180 and above, else outputs "Failed"

let studentScore = 100; //The score of the student is assigned to the variable studentScore

//The function studentResult takes a score as an argument and checks if it is greater than or equal to 180
//If the condition is true, it logs "Passed" to the console; otherwise, it logs "Failed"

function studentResult (score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");  
    };
};

studentResult(studentScore); //The function is called with the value of the studentScore as an argument




// 2. Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".


//A function that checks if a person is eligible to vote based on their age
eligibilityToVote = (age) => {
    if (age >= 18) {
        console.log ("You are eligible to vote");
    } else {
        console.log ("Not eligible");
    };
};

eligibilityToVote(120); // Call the function with an age of 20




// 3. Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise


//A function that evaluates a student's performance based on their score
//The function takes a name and score as arguments and checks the score against different thresholds

function evaluateStudent(name, score) {
    if (score >= 90) {
        console.log(`Excellent`);
    } else if (score >= 75) {
        console.log(`Good`);
    } else if (score >= 50) {
        console.log(`Average`);
    } else {
        console.log(`Fail`);
    };
};

//The function is called with a name and score as arguments
evaluateStudent("John", -19); // Call the function with a name and score

//OTHER
// function evaluateStudent(name, score) {
//     if (score >= 90) {
//         console.log(`${name}, Excellent`);
//     } else if (score >= 75) {
//         console.log(`${name}, Good`);
//     } else if (score >= 50) {
//         console.log(`${name}, Average`);
//     } else {
//         console.log(`${name}, Fail`);
//     }
// };
// evaluateStudent("John", 89); // Call the function with a name and score




// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.


//A function that checks if a user has access based on two boolean values: hasID and isAbove18
function reqAccess (hasID, isAbove18) {
    if (hasID && isAbove18) {
        console.log("Access granted");
    }   else {
        console.log("Access denied");
    };
};

//The function is called with two boolean values as arguments
reqAccess(true, 0); // Call the function with one value as false




// 5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.


let studentScores = [45, 60, 30, 65, 23, 98]; //The array contains different scores of students

//The for loop iterates through each score in the array and checks if it is equal or greater than 50
//If the condition is true, it logs "Pass"; otherwise, it logs "Fail"
for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    };
};  




// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".


//An arrow function that checks if a student passed both Math and English with a score of 50 or above

const checkPass = (mathScore, englishScore) => {
    (mathScore >= 50 && englishScore >= 50) ? console.log("Yes") : console.log("No");
};

checkPass(50, 50); // Call the function with two scores to detrmine if the student passed both subjects




// 7. Create a function that checks if a user has either an email or a phone number before signing up.


//A function that checks if a user has provided either an email or a phone number before signing up
function checkSignUp(email, phone) {
    if (email || phone) {
        console.log("Sign up successful");
    } else {
        console.log("Please provide an email or phone number");
    };
}

checkSignUp("", ""); //The function is called with an empty email and phone number as arguments




// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.


//A function that checks if a username and password are provided before logging in
loginIn = (username, password) => {
    if (username === "" || password === "") {
        console.log("Invalid input");
    } else {
        console.log("Login successful");
    };
}

loginIn("1", "password123"); // Call the function with an empty username and a password




// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.


let hours = 39; //The variable hours is declared but not assigned a value

//A function that checks if a user is working full-time or part-time based on the number of hours worked
function checkHours (workHours) {
    workHours >= 40 ? console.log("Full-time") : console.log("Part-time");
};

//The function is called with a number of hours worked as an argument
checkHours(hours);




// 10. Write an arrow function that takes two numbers and returns the larger one.


//An arrow function that takes two numbers and returns the larger one
const findLarger = (num1, num2) => {
    num1 > num2 ? console.log(num1) : console.log(num2);
};

findLarger(50, 1900); // Calling the function with two numbers

//THE END!