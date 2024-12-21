// I commented all the programs so you can check all programs one by one easily. THANK YOU!

1. Light Bulb Experiment

var num =+ prompt("Enter a Number:");
if(num == 1){
    console.log("The Light is ON.");
 }
 else if(num == 0){
     console.log("The Light is OFF.");    
 }
 else{
     console.log("Invalid Input.");
 }

// 2. Traffic Light Simulator

// var color = prompt("Enter a Color:");
// if(color == "red" || color == "Red" || color == "RED"){
//     console.log("Stop");    
// }
// else if(color == "yellow" || color == "Yellow" || color == "YELLOW"){
//     console.log("Slow Down");    
// }
// else if(color == "green" || color == "Green" || color == "GREEN"){
//     console.log("GO");   
// }
// else{
//     console.log("Invalid Input.");    
// }

// 3. Water Temperature Checker

// var temp =+ prompt("Enter Temperature:");
// if(temp <= 0){
//     console.log("Freezing");    
// }
// else if(temp > 0 && temp <= 15){
//     console.log("Cold");    
// }
// else if(temp > 15 && temp <= 30){
//     console.log("Warm");    
// }
// else if(temp > 30 && temp <= 100){
//     console.log("Hot");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 4. Rock-Paper-Scissors Game

// var move = prompt("Player 1:");
// var next = prompt("Player 2:");
// if(move == "rock" && next == "scissors" || move == "paper" && next == "rock" || move == "scissors" && next == "paper"){
//     console.log("Player 1 Wins.");    
// }
// else if(next == "rock" && move == "scissors" || next == "paper" && move == "rock" || next == "scissors" && move == "paper"){
//     console.log("Player 2 Wins.");
// }
// else {
//     console.log("It's a Tie!");
// }

// 5. Simple Alarm System

// var first = prompt("Is the door open?");
// var second = prompt("Is motion detected?");
// if(first == "yes" || second == "yes"){
//     console.log("Alarm Triggered.");    
// }
// else if(first == "no" && second == "no"){
//     console.log("All Safe.");
// }
// else{
//     console.log("Invalid Input.");    
// }

// 6. Simple Temperature Conversion

// var conv = prompt("Type 1 for Celsius to Fahrenheit OR Type 2 for Fahrenheit to Celsius:")
// var temp = prompt("Enter Temperature:");
// var result = 0;
// if(conv == 1 && temp > 0 && temp <= 42){
//     result = (temp * 9/5) + 32;
//     console.log(result);    
// }
// else if(conv == 2 && temp > 0 && temp <= 108){
//     result = (temp - 32) * 5/9;
//     console.log(result);
// }
// else{
//     console.log("Invalid Temperature.");    
// }

// 7. Password Strength Checker

// var length = prompt("Enter Password Length:");
// if(length >= 8){
//     console.log("Strong Password.");    
// }
// else if(length >= 5 && length <= 7){
//     console.log("Moderate Password.");    
// }
// else if(length < 5){
//     console.log("Weak Password.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 8. Coin Toss Simulator

// var userInput = prompt("Enter 1 for Heads OR 0 for Tails:");
// if(userInput == 1 || userInput == 0){
//     console.log("You Wins!");    
// }
// else{
//     console.log("Invalid Input."); 
// }
// I don't know how to use this random.randint(0, 1) that's why I have done that.

// 9. Weather Suggestion Experiment

// var input = prompt("Enter Weather Condition From (Sunny, Rainy, Cold)");
// switch(input){
//     case("sunny"):
//         console.log("Wear sunglasses");
//         break;
//     case("rainy"):
//         console.log("Take an umbrella");
//         break;
//     case("cold"):
//         console.log("Wear a jacket");
//         break;
//     default:
//         console.log("Invalid Input.");
// }

// 10. Simple Arithmetic Quiz

// var userInput = prompt("Enter Result of 7 x (5 + 3) - 12 ÷ 4 :");
// var result = 7 * (5 + 3) - 12 / 4
// if(result == userInput){
//     console.log("Correct!");    
// }
// else{
//     console.log("Try Again");
// }
// I don't know how to use this random module that's why I have done that.

// 11. Eligibility for Voting

// var age = prompt("Enter Your Age:");
// if(age >= 18 && age <= 100){
//     console.log("You are Eligible.");    
// }
// else if(age < 18){
//     console.log("You are not Eligible.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 12. Maximum of Two Numbers

// var num1 = prompt("Enter First Number:");
// var num2 = prompt("Enter Second Number:");
// if(num1 > num2){
//     console.log("The Largest Number is", num1);    
// }
// else if(num1 < num2){
//     console.log("The Largest Number is", num2);    
// }
// else if(num1 == num2){
//     console.log("Both Numbers Are Equal.");    
// }
// else{
//     console.log("Invalid Input.");    
// }