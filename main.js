const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];
  
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// let numbers = [2, 5, 1, 7, 3, 8];

// // function isOdd(num){
// //   return num % 2  == 1
// // }

// // let isOdd = function(num) {
// //   return num % 2 == 1
// // }

// // let isOdd = (num) => {
// //   return num % 2 == 1
// // }


// let isOdd = num => num % 2 == 1

// let newArray = [];
// let newArray2 = [];

// console.log("Odd numbers:", newArray);

// newArray2 = names.filter((name)=>name.includes('u'));

// console.log("results from filter:", newArray2);

// // newArray2 = numbers.map((num)=>`<li>${num} round</li>`);
// // console.log("map results:",newArray2)

// newArray2 = numbers.sort((a,b)=>{
//   if(a<b) return -1
//   else if(a>b) return 1
//   else return 0
// })
// console.log("sort results:",newArray2)

// let game = [[100, 7], [20,6], [30,10], [100,6]];

// newArray2 = game.sort((a,b)=>{
//   if(a[0]<b[0]) return 1
//   else if(a[0]>b[0]) return -1
//   else {
//     if(a[1]<b[1]){
//       return -1
//     } else if(a[1]>b[1]){
//       return 1;
//     } else return 0;
//   }
// })

// let newString = ''
// newString = numbers.reduce((total,num)=>{
//   console.log("total:", total)
//   console.log("num:",num)
//   total+=num
//   return total});

// console.log("reduce result:", newString);

// names = ['bitna','nguyen','jurgis']
// newString = names.reduce((total, name)=>{
//   console.log("total:", total);
//   console.log("name",name);
//   total += name.charAt(0)
//   return total
// },'')

// let cars = ["car", "airplane", "bike", "car"];

// let result;
// result = cars.some((item)=>item ==='car');
// console.log("result from some:",result);

// result = cars.find((item)=>item ==="car");
// console.log("result from find",result)

// result=cars.findIndex((item)=>item==='airplane');
// console.log("result from findIndex:", result);


//first character is A 
filterArray1 = [];

function firstCharA(name){
  return name.charAt(0)=="A";
}

filterArray1 = inventors.filter(firstCharA);
console.log(filterArray1)


//name contains 'n'
filterArray2 = []
function nameContainsN(name){
    return name.includes('n');
  }
  
filterArray2 = inventors.filter(nameContainsN);
console.log(filterArray2)

//name contains two same letters in a row
filterArray3 = [];

console.log(inventors[0][0])

for(let i=0; i< inventors.length; i++){
  for (let j=0; j < inventors[i].length; j++){
    if (inventors[i][j]==inventors[i][j+1]) {
      filterArray3.push(inventors[i]);
    }
  }
}

console.log(filterArray3)

//Print out an array of the numbers which are odd.
function isOdd(num){
    return num%2==1
}
  
filterArray4 = [];
filterArray4 = numbers.filter(isOdd);

//Print out an array of the numbers that have two digits.
function twoDigits(num){
    return (num>=10 && num<=99)
}
  
filterArray5 = []
filterArray5 = numbers.filter(twoDigits)

//Print out an array of the numbers which are prime.



//MAPS. get first name
mapArray = [];

function firstName(name){
  return name.split(' ')[0];
}

mapArray = inventors.map(firstName);

console.log(mapArray)

//Print out the length of every inventor's full name.
mapArray2 = [];

function nameLength(name){
  return name.length-1;
}

mapArray2 = inventors.map(nameLength);

console.log(mapArray2)

//Print out all the inventors' names in uppercase.
mapArray3 = [];

function upperCase(name){
  return name.toUpperCase();
}

mapArray3 = inventors.map(upperCase);
/* or mapArray = inventors.map(name=>name.toUpperCase()); */
console.log(mapArray3)


//Print out initials of all inventors(e.g. A.E., I.N., ...)
mapArray4 = [];

function getInitials(name){
  let nameParts = name.split(' ')
  return initials = nameParts[0].charAt(0)+nameParts[1].charAt(0)
}

mapArray4 = inventors.map(getInitials);

console.log(mapArray4)

//Print out an array of every number multiplied by 100.
mapArray5 = [];

function multiple100(num){
  return num*100
}

mapArray5 = numbers.map(multiple100);

console.log(mapArray5)

//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
const a = [2, 4, 8, 16 ]
mapArray6 = [];

function powerOfTwo(num){
  return Math.log2(num)
}

mapArray6 = a.map(powerOfTwo)

console.log(mapArray6)

//Sort all the inventors in alphabetical order, A-Z.
mapArray7 = [];

function sortA2Z(a,b){
  if (a>b) return 1
  if (a<b) return -1
  else return 0
}

mapArray7 = inventors.sort(sortA2Z)

console.log(mapArray7)


//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
mapArray8 = [];

function sortZ2A(a,b){
  if (a>b) return -1
  if (a<b) return 1
  return 0
}

mapArray8 = inventors.sort(sortZ2A)

console.log(mapArray8)

//Sort all the inventors by length of name, shortest name first.
mapArray9 = [];

function sortNameByLength(a, b){
  return a.length - b.length;
}

mapArray9 = inventors.sort(sortNameByLength)

console.log(mapArray9)

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
mapArray10 = [];

function sortNameByLength(a, b){
  return b.length - a.length;
}

mapArray10 = inventors.sort(sortNameByLength)

console.log(mapArray10)


//Find the sum of all the numbers.
reduceArray = []

function sumOfAllNum(total, value){
  return total+value;
}

reduceArray = numbers.reduce(sumOfAllNum)

console.log(reduceArray)

//Find the sum of all the even numbers.
reduceArray2 = []

function isEven(num){
  return num%2===0;
}

let evenNumArray = numbers.filter(isEven);

function sumOfEvenNum(total, num){
  return total+num;
}3

reduceArray2 = evenNumArray2.reduce(sumOfEvenNum);

console.log(reduceArray2)

//Create a string that has the first name of every inventor.
reduceArray3 = []


reduceArray3 = inventors.reduce((total, name) => {
  total+=name;
  return total
}, '')

console.log(reduceArray3)

//Create a string that has the first name of every inventor.
reduceArray4 = []

firstNameArray = []

firstNameArray = inventors.map((name) => {
  return name.split(' ')[0]
})

reduceArray4 = firstNameArray.reduce((total, name) => {
  total+=name;
  return total
}, '')

console.log(reduceArray4)

//Does any inventor have the letter 'y' in their name?
let someResult;

function hasY(name){
  return name.includes('y');
}

someResult = inventors.some(hasY);

console.log(someResult)

//Does every inventor have the letter 'e' in their name?
let someResult2;

function hasE(name){
  return name.includes('e');
}

someResult2 = inventors.every(hasE)

console.log(someResult2)

//Does every inventor have first name that's longer than 4 characters?
let someResult3;

function has4LetterFirstName(name){
  let firstName = name.split(' ')[0];
  return firstName.length>4
}

someResult3 = inventors.every(has4LetterFirstName)

console.log(someResult3)

//Find the inventor that has a middle name.
findArray = [];

function hasMiddleName(name){
  return name.split(' ').length>2
}

findArray = inventors.find(hasMiddleName);

console.log(findArray)

//Bonus: Return a new array, that only has inventors without a middle name. 
findArray2 = [];

function hasMiddleName(name){
  return name.split(' ').length>2
}

middleNameInventor = inventors.find(hasMiddleName);

findArray2 = inventors.filter((name) =>{
  return name!==middleNameInventor;
})

console.log(findArray2)

//Find the number divisible by 7.
findArray3 = [];

function divisibleBy7(num){
  return num%7==0;
}

findArray3 = numbers.find(divisibleBy7)

console.log(findArray3)

//Bonus: Return a new array, that only has the numbers that are not divisible by 7.
findArray4 = [];

function divisibleBy7(num){
  return num%7==0;
}

numDivBy7 = numbers.find(divisibleBy7)

function notNumDivBy7(num){
  return num!==numDivBy7
}

findArray4 = numbers.filter(notNumDivBy7)

console.log(findArray4)

