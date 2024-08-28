#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n ---- Welcome To Our Mini Number Gassing Game ---- \n");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please Guess Number Between 1-10 !"
    }
]);
console.log(`\n  You Guessed : ${answers.userGuessedNumber}`);

if (answers.userGuessedNumber === randomNumber) {
    console.log("\n Congratulation! Your Guessed Number Is Right.");
} else{
    console.log("\n Your Guessed Number Is Wrong.");
}

console.log("\n ---- Thanks For Testing Our Project ---- \n");
