// 1
// function checkAge(age) {
//     if ( age >= 18) { 
//       return "You are an adult";
//     }
//     return "You are a minor";
//   }
//   console.log(checkAge(3));


// 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {return "Welcome!";}
//     return "Access denied, wrong password!";
//   }


//3
// function checkStorage(available, ordered) {
//     if (ordered === 0) {return "Your order is empty!";}
//    if (ordered > available) {return "Your order is too large, not enough goods in stock!";} 
//    return "The order is accepted, our manager will contact you";
//   }


//4
//const fruits = ["apple", "plum", "pear", "orange"];


//5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


//6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';


//7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength =  (fruits.length)


//8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]


//9
// function getExtremeElements(array) {
//     const arr =array.splice(1, array.length-2)
//     return array;
//    }
   

//10
// function splitMessage(message, delimeter) {
// let words;
// if(delimeter){
//     words = message.split(delimeter);
// } else if(delimeter===("")){
//     words = message.split("");}
//     return words;
// }


//11
// function calculateEngravingPrice(message, pricePerWord) {
//     let word = message.split(' ');
//      let cost = word.length * pricePerWord
//     return cost
//     }


//12
// function makeStringFromArray(array, delimeter) {
//     let string;
//   string = array.join(delimeter);
//     return string;
//   }
//console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));


//13
//function slugify(title) {
// return title.toLowerCase().split(' ').join('-')
// }
//console.log(slugify("Arrays for begginers"));


//14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = (fruits.slice(0, 2));
// const nonExtremeEls = (fruits.slice(1, 4));
// const lastThreeEls = (fruits.slice(-3));

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


//15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(oldClients);
// console.log(allClients);
// console.log(newClients);


//16
// function makeArray(firstArray, secondArray, maxLength) {
//   const concatArray = firstArray.concat(secondArray);
//   const sliceArray = concatArray.slice(0, maxLength);
//      if (concatArray < maxLength) {
//          return concatArray;
//    }
//      return sliceArray;
//    }


//17
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) 
//   console.log(i);
// }


//18
// function calculateTotal(number) {
//     let quantum = 0;
//     for (let i = 0; i <= number; i += 1) {
//     quantum += i;}
//      return quantum;
//     }


//19
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }


//20
// function calculateTotalPrice(order) {
// 	let total = 0;
// 	for (let i = 0; i < order.length; i += 1) {
// 		total += order[i]
// 	}
// 	return total;
// }


//21
// function findLongestWord(string) {
//     const strSplit = string.split(' ');
//     let longestWord = ' ';
//     for(let i = 0; i < strSplit.length; i += 1) {
//     if(strSplit[i].length > longestWord.length) {
//      longestWord = strSplit[i];
//      }}
//      return longestWord;
//    }


//22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//   numbers.push(i)
//   } 
//     return numbers;
//   }


//23
// function filterArray(numbers, value) {
//     let rezult = [];
//       for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//        rezult.push(numbers[i])
//     }}
//     return rezult;
//     }


//24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit) ? true : false;
//   }


//25
// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//          newArray.push(array1[i])
//     }}
//     return newArray;
//   }


//26
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const price of order) {
//   total += price;}
//     return total;
//   }


//27
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     for (let number of numbers) {
//     if (number > value) {
//      filteredNumbers.push(number);
//      }}
//      return filteredNumbers;
//    }


//28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;


//29
// function getEvenNumbers(start, end) {
//     const number = [];
//     for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//      number.push(i)
//     }}
//     return number
//     }


//30
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }}


//31
// function findNumber(start, end, divisor) {
//     let number;
//     for (let i = start; i < end; i += 1) {
//      if (i % divisor === 0) {
//        number = i;
//      return number;
//    }}}


//32
// function includes(array, value) {
//     let result;
//       for (let val of array) {
//       console.log(val);
//         if (val === value) {
//           return true; }
//         else { result = false;}}
//       return result;}