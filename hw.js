// Change code below this line
// console.log(productName);
// 'Droid'
// console.log(pricePerItem);
// 2000

// const productName = 'Droid';
// const pricePerItem = 2000;
//1_______________________________________________

// let productName = "Droid";
// let pricePerItem = 2000;
// Change code below this line

// productName = "Repair droid";
// pricePerItem = 3500;
//2_______________________________________________

// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// let isAdmin = false;
//3________________________________________________

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity
//4_________________________________________________

// const productName = "Droid";
// const pricePerItem = 3500;
// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
//5__________________________________________________

// Change code below this line
// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//6___________________________________________________

// Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!")
// }
// sayHi();
//7___________________________________________________

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
//8____________________________________________________

// function add(a, b, c) {
// Change code below this line
// return a + b + c
//  Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
//9_____________________________________________________

// function makeMessage (name, price) {
// Change code below this line
// const message = `You picked ${name}, price per item is ${price} credits`;
//  Change code above this line
// return message;
// };
//10______________________________________________________

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// Change code below this line
// const totalPrice = orderedQuantity * pricePerItem;
// Change code above this line
// return totalPrice;
//   };
//11________________________________________________________

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// Change code below this line
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// Change code above this line
// return message;
//   }
//12__________________________________________________________

// function isAdult(age) {
//  Change code below this line
// const passed = (age >= 18);
//  Change code above this line
//  return passed;
//   }
//13___________________________________________________________

// function isValidPassword(password) {
// const SAVED_PASSWORD = 'jqueryismyjam';
// Change code below this line
// const isMatch = password === SAVED_PASSWORD;
//  Change code above this line
//  return isMatch;
//   }
//14___________________________________________________________

// function checkAge(age) {
// let message;
// if (age >= 18) { // Change this line
//  message = 'You are an adult';
//  } else {
//  message = 'You are a minor';
// }
// return message;
//   }
//15___________________________________________________________

// function checkStorage(available, ordered) {
// let message;
// Change code below this line
// if (available < ordered) 
// { message = "Not enough goods in stock!";}
//     else message = "Order is processed, our manager will contact you.";
//     Change code above this line
// return message;
// }
//16___________________________________________________________

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
//17____________________________________________________________

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// let message;
// const totalPrice = (pricePerDroid * orderedQuantity);
// if (totalPrice > customerCredits) { message = `Insufficient funds!`;}
// else{
// message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`};  
// return message;
//   }
//18________________________________________________________________

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
//      if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//     return message;
//    }
//19__________________________________________________________________

// function checkStorage(available, ordered) {
//     let message;
   
//    if (ordered === 0) {message = "There are no products in the order!"}
//    else if (available < ordered) {message = "Your order is too large, there are not enough items in stock!"}
//    else {message = "The order is accepted, our manager will contact you"}
//      return message;
//    }
   
//    console.log(checkStorage(100, 50));
//    console.log(checkStorage(100, 130));
//    console.log(checkStorage(70, 0));
//    console.log(checkStorage(200, 20));
//    console.log(checkStorage(200, 250));
//    console.log(checkStorage(150, 0));
//20____________________________________________________________________

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     return isInRange;
//   }
//21______________________________________________________________________

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType  === "pro" || subType  === "vip");
//     return canAccessContent;
//   }
//22______________________________________________________________________

// function isNumberNotInRange(start, end, number) {
// const isInRange = number >= start && number <= end;
// const isNotInRange = !isInRange;
//     return isNotInRange;
// }
//23_____________________________________________________________________

// function getDiscount(totalSpent) {
// const BASE_DISCOUNT = 0;
// const BRONZE_DISCOUNT = 0.02;
// const SILVER_DISCOUNT = 0.05;
// const GOLD_DISCOUNT = 0.1;
// let discount;
// if (totalSpent >= 50000) {
// discount  = GOLD_DISCOUNT;}
// else if (totalSpent >= 20000 && totalSpent < 50000) {
// discount = SILVER_DISCOUNT;}
// else if (totalSpent >= 5000 && totalSpent < 20000) {
// discount = BRONZE_DISCOUNT;}
// else if (totalSpent < 5000) {
// discount = BASE_DISCOUNT;}

// return discount;
// }
//24____________________________________________________________

// function checkStorage(available, ordered) {
//  let message;
// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
// return message;
// }
//25______________________________________________________________

// function checkPassword(password) {
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// message = password == ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
// return message;
// }
//26______________________________________________________________

// function getSubscriptionPrice(type) {
// let price;
// switch (type) { // Change this line
//     case "starter": // Change this line
//     price = 0; // Change this line
//     break;
//     case "professional": // Change this line
//     price = 20; // Change this line
//     break;
//     case "organization": // Change this line
//     price = 50; // Change this line
//     break;
//     }
//     return price;
// }
//27______________________________________________________________

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//  switch (password) {
//  case null:
//   "Canceled by user!";
//   break;
//  case (password === ADMIN_PASSWORD):
//    "Welcome!";
//    break;   
//   default:
//      "Access denied, wrong password!";
//   }
    
//     if (password === null) {
//       message = "Canceled by user!";
//     } else if (password === ADMIN_PASSWORD) {
//       message = "Welcome!";
//     } else {
//       message = "Access denied, wrong password!";
//     }
//     return message;
//   }
//28____________________________________________________________

// function getShippingCost(country) {
// let message;
//     switch(country) {
//     case "China":
//     message = `Shipping to China will cost 100 credits`
//     break;
//     case "Chile":
//     message = `Shipping to Chile will cost 250 credits`
//     break;
//     case "Australia":
//     message = `Shipping to Australia will cost 170 credits`
//     break;
//     case "Jamaica":
//         message = `Shipping to Jamaica will cost 120 credits`
//         break;
// default : 
//         message = "Sorry, there is no delivery to your country"
//     }
//     return message;
// }
//29____________________________________________________________

// function getNameLength(name) {
// const message = `Name ${name} is ${name.length} characters long`; 
// return message;
// }
//30____________________________________________________________

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic [0];
// const lastElement = courseTopic[courseTopic.length - 1];
// 31_____________________________________________________________

// function getSubstring(string, length) {
// const substring = string.slice(0, length); 
// return substring;
// }
//32______________________________________________________________

// function formatMessage(message, maxLength) {
// let result;
// result = message.length <= maxLength ? message : message.slice(message, maxLength) + '...';
//     return result;
// }
// 33______________________________________________________________

// function normalizeInput(input) {
// const normalizedInput = input.toLowerCase(); 
// return normalizedInput;
// }
//34________________________________________________________________

// function checkForName(fullName, name) {
// const result = fullName.includes(name); 
//     return result;
// }
//35________________________________________________________________

// function checkForSpam(message) {
// let result;
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;
// return result;
// }
// 36____________________________________________________________________
