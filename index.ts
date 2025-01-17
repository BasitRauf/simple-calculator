#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "Enetr First Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enetr Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one odf the operators to perform the operation",
        type: "list",
        name: "operator",
        choices: ["Addition","subtraction","Multiplication","Division"],
    },
]);

if (answer.operator === "Addition")
{
    console.log(answer.firstNumber + answer.secondNumber);   
} 
else if (answer.operator === "subtraction") 
{
    console.log(answer.firstNumber - answer.secondNumber);
} 
else if (answer.operator === "Multiplication") 
{
    console.log(answer.firstNumber * answer.secondNumber);

} 
else if (answer.operator === "Division") 
{ 
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid Number");   
}
