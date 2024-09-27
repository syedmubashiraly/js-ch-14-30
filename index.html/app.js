// Question 1
document.write("Chap: 12 - 13<br><br>Question 1 <br>")
var a = prompt("Enter a letter")
if (a.charCodeAt() > 64 && a.charCodeAt() < 91){
    document.write("Upper Case")
} else if (a.charCodeAt() > 96 && a.charCodeAt() < 123){
    document.write("Lower Case")
} else if (a.charCodeAt() > 47  && a.charCodeAt() < 58){
    document.write("Number")
} else {
    document.write("Special Character")
}


// Question 2
document.write("<br><br><br>Question 2 <br>")
var first_num = +prompt("Enter your first number")
var second_num = +prompt("Enter your second number")
if (first_num > second_num){
    document.write(first_num + " is greater than " + second_num)
} else if (second_num > first_num){
    document.write(second_num + " is greater than " + first_num)
} else {
    document.write("The given two numbers are equal.")
}


// Question 3
document.write("<br><br><br>Question 3 <br>")
var new_num = +prompt("Enter a number to check if it is positive, negative or zero")
if (new_num > 0){
    document.write(new_num + " is a positive number")
} else if (new_num < 0 ){
    document.write(new_num + " is a negative number")
} else {
    document.write(new_num + " is neither positive nor negative")
}


// Question 4 
document.write("<br><br><br>Question 4 <br>")
var new_char = prompt("Enter an alphabet to check if it is vowel")
if (new_char === "a" || new_char === "e" || new_char === "i" || new_char === "o" || new_char === "u"){
    document.write("Your alphabet is a vowel.")
} else {
    document.write("Your alphabet is a consonant.")
}


// Question 5
document.write("<br><br><br>Question 5<br>")
var regpassword = prompt("Register your password")
var password = prompt("Enter your password")
if (password === ""){
    document.write("Please enter your password")
} else if (password === regpassword){
    document.write("Correct! The password you entered matches the original password.")
} else {
    document.write("Incorrect! The password you entered does not match the original password.")
}


// Question 6
document.write("<br><br><br>Question 6<br>")
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
document.write(greeting)


// Question 7
document.write("<br><br><br>Question 7 <br>")
var time = +prompt("Enter the time in 24 hours format")
if (time >= 0 && time < 1200) {
    document.write("Good Morning")
} else if (time >= 1200 && time < 1700){
    document.write("Good Afternoon")
} else if (time >= 1700 && time < 2100){
    document.write("Good Evening")
} else {
    document.write("Good Night")
}