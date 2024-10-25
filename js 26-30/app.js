
// *******************  Question-1 *******************
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



document.write("<h3>------------ Question-1  ------------<h3>")
var num=+prompt("Enter a positive integer")
var numround=Math.round(num)
document.write("Number:"+num+"<br/>")
document.write("Round off:"+numround+"<br/>")
var numceil=Math.ceil(num)
document.write("Ceil value:"+numceil+"<br/>")
var numfloor=Math.floor(num)
document.write("Floor value"+numfloor+"<br/>")

// *******************  Question-2  *******************
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


document.write("<h3>------------ Question-2  ------------<h3>")

var num1=+prompt("Enter a negative integer")
var numround1=Math.round(num1)
document.write("Number:"+num1+"<br/>")
document.write("Round off:"+numround1+"<br/>")
var numceil1=Math.ceil(num1)
document.write("Ceil value:"+numceil1+"<br/>")
var numfloor1=Math.floor(num1)
document.write("Floor value"+numfloor1+"<br/>")

// *******************  Question-3 *******************
// Write a program that displays the absolute value of a 
// number.

document.write("<h3>------------ Question-3  ------------<h3>")
var num2=+prompt("Enter any Number to get its absolute value")
var numb2=Math.abs(num2)
document.write("The absolute value of ths given num is:"+numb2)

//  *******************  Question-4 *******************
// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

document.write("<h3>------------ Question-4  ------------<h3/>")
var dice1=Math.random()*6
var dicen1=dice1.toFixed(0)
var dicen2=Math.floor(dicen1)
document.write("Random dice value is:"+dicen2+"<br/>")
var dice2=Math.random()*6
var dicen3=dice2.toFixed(0)
var dicen4=Math.floor(dicen3)
document.write("Random dice value is:"+dicen4+"<br/>")

//  *******************  Question-5 *******************
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browse

document.write("<h3>------------ Question-5  ------------<h3/>")
var d1=Math.random()*2
var d2=d1.toFixed(0)
var d3=Math.floor(d2)

if(d3===2){
    document.write("Random coin value is Head")
}else if(d3===1){
    document.write("Random coin value is Tails")
}else(document.write("Try again"))

//  *******************  Question-6 *******************
// Write a program that shows a random number between 1 
// and 100 in your browser

document.write("<h3>------------ Question-6 ------------<h3/>")
 var maths=Math.random()*100
  var maths2=maths.toFixed(0)
 var maths3=Math.floor(maths2)

 document.write("Random number between 1 to 100:"+maths3)

 //  *******************  Question-7 *******************
//  Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:


document.write("<h3>------------ Question-7 ------------<h3/>")
var weight=prompt("Enter your weight in kg")
var whgt=parseFloat(weight)
 document.write("The weight of the user is:"+whgt)

//  *******************  Question-8 *******************
// Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user


document.write("<h3>------------ Question-8 ------------<h3/>")
var secnum=+prompt("Guess and enter any secret number between 1-10");
var secret=Math.random()*10;
var s1=secret.toFixed(0);
var s2=Math.floor(s1);

if(secnum===s2){
    document.write("Congratulations! You guessed it right")
}else(document.write("Sorry you guessed wrong num"))
