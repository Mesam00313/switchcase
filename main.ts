#! /Usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import number from "inquirer/lib/prompts/number.js";

//step 1
const answers : {
    numberone: number,
    numbertwo: number,
    operator: string
} = await inquirer.prompt([
    {type: "number",
    name: "numberone",
    message: (chalk.yellowBright("enter your first number"))},
    {
        type: "number",
    name: "numbertwo",
    message: (chalk.redBright("enter your second number"))},
    {
        type: "list",
        name: "operator",
        message: (chalk.greenBright("choose your opertor")),
        choices: ["+", "-", "*", "/"]}
])
//step 2
const {numberone, numbertwo, operator} =answers;

let result
switch(operator){
case "+":
    result = numberone + numbertwo;
    break;
    case "-":
        result = numberone - numbertwo;
        break;
        case "*":
            result = numberone * numbertwo;
            break;
            case "/":
                result = numberone / numbertwo;
                break;
                default:
                    console.log("invalid operator");
                    break;
}
console.log(chalk.red(`${numberone} ${operator} ${numbertwo} = ${result}`));

