#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "enter first number", type: "number",name: "firstnumber"},
    {message: "enter second number", type: "number", name: "secondnumber"},
    {
     message: "select one of the oprators to perform oprations",
     type: "list",
     name: "oprators",
     choices: ["Addition", "Subtraction", "Multiplication", "Division"], 
    },
]);
console.log(answer);

//conditional statment 

if (answer.oprators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber );
}
else if (answer.oprators === "Subtraction") {
  
    console.log (answer.firstnumber - answer.secondnumber);
}
else if (answer.oprators === "Multiplication") {
        console.log(answer.firstnumber * answer.secondnumber);
    }
else if (answer.oprators === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}

