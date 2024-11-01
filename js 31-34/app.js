// *******************  Question-1 *******************
// Write a program that displays current date and time in 
// your browser

var d= new Date();
document.write(d)

// *******************  Question-2 *******************
// . Write a program that alerts the current month in words. 
// For example December.

var month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
var currentmonth=d.getMonth();
var monthtoday=month[currentmonth]
document.write("<br/>" +"Current Month is:"+monthtoday)


// *******************  Question-3 *******************
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentday=d.getDay().toString()
var dday=day[currentday].slice(0,3)
document.write("<br/>" +"Today is"+" "+dday)


// *******************  Question-4 *******************'
// Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentday=d.getDay()
// var dday=day[currentday]
// console.log(dday)
if(dday== 0||6){
document.write("<br/>" +"It's a funday")
}else(document.write("<br/>" +"It's a working day"))


// *******************  Question-5 *******************'

var m=d.getDate();
if(m<=15){
    document.write("<br/>" +"First fifteen days of the month")
}else if(m>=15){
    document.write("<br/>" +"Last fifteen days of the month")
}


// *******************  Question-6 *******************'
// Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object

document.write(d+"<br/>");
var second=d.getTime();
document.write("<br/>" +"Elapsed miliseconds since 1,January 1971:"+second+"<br/>");
var minutes=(second*60);
document.write("<br/>" +"Elapsed minutes since 1,January:"+minutes);


// *******************  Question-7 *******************'
// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”

var currenthours=d.getHours();
if(currenthours<=12){
    document.write("<br/>" +"It's AM")
}else{
    document.write("<br/>" +"It's PM")
}


// *******************  Question-8 *******************'
// Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate

var laterdate=new Date(2020 , 11, 31)
document.write("<br/>" +laterdate
)


// *******************  Question-9 *******************'
// Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan

var startOfRamadan = new Date(2024, 2, 11);
var currentDate = new Date();
var diffInMs = currentDate - startOfRamadan;
var daysPast = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
document.write("<br/>" +"Number of days past since 1st Ramadan are;"+daysPast);


// *******************  Question-10 *******************'
// Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

var begin=new Date(2024,1,1)
var pasd=d-begin;
var begindays=Math.floor(pasd/(1000*60))
document.write("<br/>" +"On refrence date"+" "+d+"<br/>")
document.write("<br/>" +begindays+" "+"seconds had passed since beginning of 2024")


// *******************  Question-11 ******************
// Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

document.write("Current Date:"+d+"<br/>")
var latetime=d.setHours(currenthours-1)

document.write("<br/>" +"1 hour ago,it was"+" "+d)


// *******************  Question-12 ******************
// Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back

document.write("<br/>" +"Current date is:"+d+"<br/>")
var currenyear=d.getFullYear();
console.log(currenyear)
var lateryear=d.setFullYear(currenyear-100)
document.write("100 Years back,It was"+d)


// *******************  Question-13 ******************
// Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser

var age=+prompt("Enter your age please")
document.write("<br/>" +"Your age is"+" "+age+"<br/>")
var birthyear=d.setFullYear(currenyear-age)
var agestring=d.toString()
var upd=agestring.slice(11,15)
document.write("Your Birth Year is"+" "+upd)


// *******************  Question-14 ******************
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

document.write(`
    <h3>Customer Name:Asad mubashir</h3>
    <h3>Month:October</h3>
    <h3>Number of units:245</h3>
    <h3>Charges per unit:27</h3>
    <h3>Net Amount Payable (within Due Date):${245*27}</h3>
    <h3>Late Payment surcharge:1200</h3>
    <h3>Gross Amount Payable(After Due Date):${245*27+1200}
    `)