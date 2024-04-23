#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operations",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
//conditional statements
if (answer.operators === "Addition") {
    console.log("Your value is: " + answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else{
console.log("Please select valid operator");
}
