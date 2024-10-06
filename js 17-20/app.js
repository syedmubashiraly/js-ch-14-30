//******************** Qusetion no. 1***********************

var emptyarr= [[],[],[]]

//******************** Qusetion no. 2***********************


var multidimArr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

document.write(`<h2>Qusetion no. 2  <br /> <br />
    The Following Matrix is <br /> ${multidimArr[0] }<br />
   ${multidimArr[1] }<br /> ${multidimArr[2] }<br /> </h2>`)

 //******************** Qusetion no. 3***********************
document.write(`<h2> Question no. 3 <br /> <br /> COUNTING ONE TO TEN </h2> `)

for(var i=1;i<=10;i++){document.write(i+"<br />")}



 //******************** Qusetion no. 4***********************

// var inputNum=+prompt("Enter a number you need a Table of")
// var tableLength=+prompt("Enter a length you to print table in")
// document.write(`<h2> Question no. 4 <br /> <br /> 
//     Multiplication Table of ${inputNum} with the length of ${tableLength} is as following </h2> <br /> `)

//     for(var i=1 ; i<=tableLength;i++)
//         {document.write( inputNum +  " x " + i + "=" + inputNum*i + "<br />" ) }

 //******************** Qusetion no. 5***********************

 var fruits=["Apple","banana","mango","orange","strawberry"]
document.write(`<h2> Question no. 5 <br /><br /> FRUITS <br /></h2>`)
 for(var i=0; i<fruits.length;i++){document.write(`<b>${fruits[i]}</b> <br />`)}
 for(var i=0; i<fruits.length;i++){document.write(`<b>Element at index ${i} is ${fruits[i]}</b> <br />`)}

 //******************** Qusetion no. 6***********************

 document.write(`<h2> Question no. 6 <br /><br /> Counting <br /></h2>`)
 for(var i=1;i<=10;i++){document.write(i+" , ")}

 document.write(`<h2> Reverse Counting</h2>`)
 for(var i=10;i>=1;i--){document.write(i+" , ")}

 
 document.write(`<h2> Even </h2>`)
for(var i=0;i<=20;i++){if(i%2==0){document.write(i+" , ")}}

document.write(`<h2> Odd </h2>`)
for(var i=1;i<=20;i++){if(i%2 !== 0){document.write(i+" , ")}}

document.write(`<h2> Series </h2>`)
for(var i=1;i<=20;i++){if(i%2==0){document.write(i+"K , ")}}

//******************** Qusetion no. 7***********************

// document.write(`<h2> Question no. 7 <br /><br /> Bakery Item Selection <br /></h2>`)

// var bakeryitem=["cake","apple pie","cookie","chips","patties"]
// var inputItem=prompt("Please input an item you want to find")
// var wehave = "no"
// var indexnum
// for(var i=0;i<bakeryitem.length;i++){
//     if(inputItem==bakeryitem[i]){wehave = "yes" , indexnum=i}
// } 

// if(wehave=="yes"){document.write(`Your input ${inputItem} is present at index ${indexnum}`)}
// else{document.write(`sorry ! We do'nt have ${inputItem}`)}

//******************** Qusetion no. 8***********************

document.write(`<h2> Question no. 8<br /><br /> Find The Greatest Number <br /></h2>`)

var a = [24, 53, 78, 91, 12]
document.write(`<b>We have set of numbers in an Array ${a}</b> <br />`)
var greatest= a[0]

for(var i = 0; i < a.length;i++){
    if(greatest<a[i]){greatest=a[i]}
}

document.write(`<b>We have ${greatest} as a greatest number in an Array </b>`)


//******************** Qusetion no. 9 ***********************


document.write(`<h2> Question no. 9<br /><br /> Find The smallest Number <br /></h2>`)

var b = [24, 53, 78, 91, 12]
document.write(`<b>We have set of numbers in an Array ${a}</b> <br />`)

var smallest= b[0]

for(var i = 0; i < a.length;i++){
    if( b[i] < smallest ){smallest = b[i]}
}

document.write(`<b>We have ${smallest} as a greatest number in an Array </b> <br />`)

//******************** Qusetion no. 10 ***********************

document.write(`<h2> Question no. 10<br /><br /> Multiple of 5 raging 1 to 100 <br /></h2>`)


for(var i=1;i<=100;i++){if(i%5==0){document.write(i+" , ")}}