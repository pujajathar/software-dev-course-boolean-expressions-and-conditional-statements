/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;
const hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
//let choice1 = readline.question("Do you have a 'sword'? Please type your answer in 'Yes' or 'No' ");

if (choice === "mountains")
        {

        let choice1 = readline.question("Do you have a 'sword'? Please type your answer in 'Yes' or 'No' ");
    if (choice1 === "No") 
         {

         console.log("You can safely navigate through the dark mountains but if you see a danger, then run!");
         }
         else if (choice === "mountains" && hasTorch && choice1 === "Yes")
        {
         console.log("You safely navigate through the dark mountains and ready to defend when sense a danger.");
        }}
    else if (choice === "mountains" && !hasTorch) 
        {
         console.log("It's too dark to proceed. You decide to turn back.");
        } 
    else if (choice === "village")
        {
            if(!hasCompass || hasMap)
            {
             console.log("You find your way to the village.");
            } 
            else 
            {
                console.log("Finding a way to village is difficult and you need to work harder.");
            }
        }   
    else 
            {
         console.log("You get lost and wander aimlessly.");
            }

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/ 