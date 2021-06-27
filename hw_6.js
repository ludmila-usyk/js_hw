//1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

// orderedItems.forEach(function (orderedItem)
// { totalPrice += orderedItem})

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


//2
// function filterArray(numbers, value) {
// const filteredNumbers = [];
// // Пиши код ниже этой строки
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//     }
// }
//     numbers.forEach(function (filteredNumbers) { })
// return filteredNumbers;
// }


//3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
//      firstArray.forEach(function (firstArray) { })
//     return commonElements;
//   }


//4
//var calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;


//5
//const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


//6
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
//     return totalPrice;
//   }


//7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//     return filteredNumbers;
//   }


//8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//     return commonElements;
//   }


//9 Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value. Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
//     const result = [];
//     numbers.forEach(number => number % 2 === 0 ? result.push(number += value) : result.push(number));
//   return result;
//     }
//before
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//           numbers[i] = numbers[i] + value;
//         }
//       }
//       // Пиши код выше этой строки
//     }


//10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map((planet) => planet.length);


//11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
//   const titles = books.map(book => book.title);


//12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const genres = books.flatMap(book => book.genres);


//13
// const getUserNames = users => {
//     return users.map((user) => user.name);
//     };


//14
// const getUserEmails = users => {
//     return users.map((user) => user.email);
//     };


//15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


//16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// 	const allGenres = books.flatMap(book => book.genres);
// 	const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);



//17
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = 'Бернард Корнуэлл';
//   // Пиши код ниже этой строки
  
//   const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author == AUTHOR);


//18
