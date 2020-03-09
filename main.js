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
filterArray1 = []

filterArray1 = inventors.filter((name) => {
  return name.charAt(0)=="A";
})

console.log(filterArray1)

//name contains 'n'
filterArray2 = []
filterArray2 = inventors.filter((name) => {
    return name.includes('n')
  })  
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
filterArray4 = [];

filterArray4 = numbers.filter((num) => {
  return num%2==1
})

console.log(filterArray4)

//Print out an array of the numbers that have two digits.
filterArray5 = []
 
filterArray5 = numbers.filter((num) => {
  return (num>=10 && num<=99)
})
console.log(filterArray5)

//Print out an array of the numbers which are prime.



//MAPS. get first name
mapArray = [];

mapArray = inventors.map((name) => {
  return name.split(' ')[0]
})

console.log(mapArray)

//Print out the length of every inventor's full name.
mapArray2 = [];

mapArray2 = inventors.map((name) => {
  return name.length-1
})

console.log(mapArray2)

//Print out all the inventors' names in uppercase.
mapArray3 = [];

mapArray3 = inventors.map((name) => {
  return name.toUpperCase();
})
/* or mapArray = inventors.map(name=>name.toUpperCase()); */
console.log(mapArray3)


//Print out initials of all inventors(e.g. A.E., I.N., ...)
mapArray4 = [];

mapArray4 = inventors.map((name) => {
  return name.split(' ')[0].charAt(0)+name.split(' ')[name.split(' ').length-1].charAt(0)
})

console.log(mapArray4)

//Print out an array of every number multiplied by 100.
mapArray5 = [];

mapArray5 = numbers.map((num) => {
  return num*100
})

console.log(mapArray5)

//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
const a = [2, 4, 8, 16 ]
mapArray6 = [];

mapArray6 = a.map((num) => {
  return Math.log2(num)
})

console.log(mapArray6)

//Sort all the inventors in alphabetical order, A-Z.
mapArray7 = [];

mapArray7 = inventors.sort((a,b) => {
  if (a<b) return -1
  if (a>b) return 1
  else return 0
})

console.log(mapArray7)

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
mapArray8 = [];

mapArray8 = inventors.sort((a,b) => {
  if (a>b) return -1
  if (a<b) return 1
  else return 0
})

console.log(mapArray8)

//Sort all the inventors by length of name, shortest name first.
mapArray9 = [];

mapArray9 = inventors.sort((a,b) => {
  if(a.length > b.length) return 1
  if(a.length < b.length) return -1
  else return 0
})

console.log(mapArray9)

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
// mapArray10 = [];

// function sortNameByLength(a, b){
//   return b.length - a.length;
// }

// mapArray10 = inventors.sort(sortNameByLength)

// console.log(mapArray10)

mapArray10 = [];

mapArray10 = inventors.sort((a,b) => {
  if(a.length > b.length) return -1
  if(a.length < b.length) return 1
  else return 0
})

console.log(mapArray10)

//Find the sum of all the numbers.
reduceArray = []

reduceArray = numbers.reduce((total, value) => {
  return total+=value
})

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

//Create a function, fib(n) that gives you the nth entry, where n is any number. 
//Every number is the sum of the two previous numbers.
findArray5 = [];
let result;

function fib(n){
  for(i=0; i<n; i++){
  findArray5.push(null);
  }
  findArray5[0]=1;
  findArray5[1]=1;
  for(i=2; i<findArray5.length;i++){
    findArray5[i]=findArray5[i-1]+findArray5[i-2];
  }
  result = findArray5[n-1];
}

fib(14)
console.log(findArray5)
console.log(result)