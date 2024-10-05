// Question # 01,02
let arr = [];
console.log(arr)

// Question # 03
let st_arr = ["string 1","string 2","string 3"]
console.log(st_arr)

// Question # 04
let num_arr = [1,2,3];
console.log(num_arr)

// Question # 05
let bol_arr = [true];
console.log(bol_arr)

// Question # 06
let mx_arr = ["string",23,true]
console.log(mx_arr)

// Question # 07
let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD",]
document.write(`Qualifications: <br><br>
    (1)${qualifications[0]} <br> (2)${qualifications[1]} <br>(3)${qualifications[2]} <br> (4)${qualifications[3]} <br>
    (5)${qualifications[4]} <br> (4)${qualifications[5]} <br>(5)${qualifications[6]} <br> (6)${qualifications[7]} <br><br><br><br>`)

// Question # 08
var student_names = ["Mubashir","Saad","Asad"]
var std_mrks = [320,230,480]
var ttl_mrks = [500]

document.write("Student names:  " + student_names + "<br>"+ "Student marks: "+std_mrks + "<br>"+ "Student percentages: "+std_mrks[0]/ttl_mrks*100+"% " + std_mrks[1]/ttl_mrks*100+"% " + std_mrks[2]/ttl_mrks*100+"% " + "<br>")

// *******************  Question-10 *******************


var studentScores = [320,230,480,120];

studentScores.sort(function(a, b) {
  return a - b;
});

console.log("Order scores of stuedents:", studentScores);


document.write("Order scores of students:", studentScores)



// *******************  Question-11 *******************

var cities=["karachi","Lahore","Islamabad","Multan","Quetta"]

 var selectedcities=cities.slice(3,5)
 console.log(selectedcities)
document.write=(selectedcities)


// *******************  Question-12 *******************

var arry = ['This',' is ',' my','cat'];
var arrresult= arry.join("");
console.log(arrresult)

// *******************  Question-13 *******************

var devices = [];
devices.push("Keyboard");
devices.push("Mouse"); 
devices.push("Printer");
devices.push("Monitor");

var first = devices.shift(); 
console.log(first);         

var second = devices.shift(); 
console.log(second);        

var third = devices.shift();  
console.log(third);         


var fourth= devices.shift();  
console.log(fourth);         

// *******************  Question-14 *******************


var devices = [];

devices.push("Keyboard"); 
devices.push("Mouse"); 
devices.push("Printer");
devices.push("Monitor");

var first = devices.pop(); 
console.log(first);       
var second = devices.pop(); 
console.log(second);      

var third = devices.pop();  
console.log(third);      

var fourth = devices.pop();  
console.log(fourth);      


// *******************  Question-15 *******************

var mobcomp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (var i = 0; i < mobcomp.length; i++) {
    document.write(`'<option value= ${mobcomp[i]}> ${mobcomp[i]} </option>`);
}
        
document.write('<select>');