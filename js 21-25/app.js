////////////////// Question 1//////////////////
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var name1 = prompt("Enter your first name").toUpperCase();
// var name2 = prompt("Enter your last name").toUpperCase();
// document.write("Wellcome, " +name1 +"  " +name2 )


////////////////// Question 2//////////////////
// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser

// var mobile = prompt("Enter your favorite mobile").toUpperCase();
// var length = mobile.length
// document.write("My fav mobile phone is:" +" " +mobile +'</br>')
// document.write("The length of the string is:" +" " +length )


////////////////// Question 3//////////////////
// // Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser

// var name = "Pakistani"
// var index = name.indexOf('n')
// document.write("string: " +" " +name +'</br>' +"index of 'n': " +index)


////////////////// Question 4//////////////////
// // Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.

// var name = "Hello World"
// var index = name.lastIndexOf('l')
// document.write("String: " +" " +name +'</br>' +"Last index of 'l': " +index)


////////////////// Question 5//////////////////
// // Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// var pak = "Pakistani"
// var char = pak.charAt(3)
    
// document.write("string: " +" " +pak +'</br>' +"Character at index 3 is: " +char)


////////////////// Question 6//////////////////
// // Repeat Q1 using string concat() method.

// var name1 = prompt("Enter your first name").toUpperCase();
// var name2 = prompt("Enter your last name").toUpperCase();

// var fullname = name1.concat(name2)
// document.write("Wellcome, " +fullname)


////////////////// Question 7//////////////////
// // Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// var city1 = "Hyderabad"
// var City2 = city1.replace("Hyder","Islam")
// document.write("City: " +city1 +'</br>' +"After replacemnt :" +City2)


////////////////// Question 8//////////////////
// // Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.

// var message = "Ali and Muavia are best friends. They play cricket and football together.";
// var updmsg = message.replaceAll("and","&")
// document.write(updmsg)


////////////////// Question 9//////////////////
// // Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.

// var num1="472"
// document.write(num1+"</br>")
// document.write(typeof(num1)+"</br>")
// var num2=(parseInt(472))
// document.write(num2+"</br>")
// document.write(typeof(num2))


////////////////// Question 10//////////////////
// //  Write a program that takes user input. Convert and
// //  show the input in capital letters.

//  var input=prompt("Enter something")
//  document.write("User input:"+input+"<br/>"+"<br/>")
//  var Uinp=input.toUpperCase()
//  document.write("Upper case:"+Uinp)

////////////////// Question 11//////////////////
// // Write a program that takes user input. Convert and
// // show the input in title case.

// var input=prompt("Enter something")

// document.write("User Input:"+input+"<br/>"+"<br/>")
// var inp1=input.slice(0,1)
// var inp2=inp1.toUpperCase()
// var inp3=input.slice(1,input.length)
// document.write("Upper Case:"+inp2+inp3)


////////////////// Question 12//////////////////
// // Write a program that converts the variable num to
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// var number=35.36
// var number1=number.toString()
// var str=number1.replace(".","")
// document.write("Number:"+" "+number+"<br/>"+"<br/>" +"Result:"+" "+str)

////////////////// Question 14//////////////////
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var userInput = prompt("Welcome to the bakery! What do you want to search for?").toLowerCase();
// var found=false
  
// var userlower = userInput.toLowerCase();
// var itemsindex;


// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userlower ) {
//         found = true,itemsindex=i;
//         break;
//     }
// }
// if (found) {
//             alert(userlower + " is available at index " + itemsindex + " in our bakery.");
//         } else {
//             alert("We are sorry. " + userlower+ " is not available in our bakery.");
//         }

////////////////// Question 13//////////////////
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

// var username=prompt("Enter your username");


// for(var i = 0; i < username.length ;  i++){
//     var char=username.charCodeAt(i);
//     if (username[i].charCodeAt=== 33||
//         username[i].charCodeAt=== 44||
//         username[i].charCodeAt=== 46||
//         username[i].charCodeAt=== 64){
//         var valid="false";
//         }else( valid="true")
//     }
// if(valid==="false"){document.write("Enter a valid username")

// }else{document.write("Your username is valid")}


////////////////// Question 16//////////////////
// // Write a program to convert the following string to an
// // array using string split method.
// // var university = “University of Karachi”;

// var ku = "University of Karachi";
// var uni = ku.split("");
// for (var i = 0; i < uni.length; i++){
//     document.write(uni[i]+"<br/>")
// }


////////////////// Question 17//////////////////
// // Write a program to display the last character of a user
//  // input.

// var useri=prompt("Prompt any word")
// var lastchar=useri[useri.length-1]
// document.write("User input:"+useri+"<br/>" +"The last character of the input is:"+lastchar)


////////////////// Question 18//////////////////
// // You have a string “The quick brown fox jumps over the 
// // lazy dog”. Write a program to count number of 
// // occurrences of word “the” in given string

var sen=("The quick brown fox jumps over the lazy dog")
document.write("Sentence;"+sen+"<br/>")
var senlow=sen.toLowerCase()
var wordssen=senlow.split(" ");
var count = 0;
for (var i = 0; i < wordssen.length; i++) {
  if (wordssen[i] === "the") {
    count++;
  }
}
document.write(`The word 'the' appears  ${count}  times in the given string.`);