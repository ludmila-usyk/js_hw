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
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
//    };


//19
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge);
//     };


//20
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
//   }
//   console.log(getUsersWithFriend)


//21
// const getFriends = (users, friends) => {
//    const AllFriends = users.flatMap(user => user.friends);
//   return AllFriends.filter((friend, index, users)=> users.indexOf(friend)===index)
// };


//22
// const getActiveUsers = (users) => {
//     return users.filter(user=> user.isActive);
//  };


//23
// const getInactiveUsers = (users) => {
//     return users.filter(user=> user.isActive !== true);
//  };


//24
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'Сон смешного человека';
//   const AUTHOR = 'Роберт Шекли';
//   // Пиши код ниже этой строки
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE );
//   const bookByAuthor = books.find(book => book.author === AUTHOR );


//25
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
//   };


//26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const eachElementInFirstIsEven = firstArray.every(Array => Array % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(Array => Array % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(Array => Array % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(Array => Array % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(Array => Array % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(Array => Array % 2 === 0);


//27
// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive)
//   };


//28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const anyElementInFirstIsEven = firstArray.some(Array=>Array % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(Array=>Array % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some(Array=>Array % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(Array=>Array % 2 !== 0);
// const anyElementInThirdIsEven = thirdArray.some(Array=>Array % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(Array=>Array % 2 === 0);


//29
// const isAnyUserActive = users => {
//     return users.some(user => user.isActive)
//  };


//30
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((previousValue, playtime) =>{ return previousValue + playtime;}, 0);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;


//31
// const players = [
//     { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//     { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//     { name: 'Киви', playtime: 241, gamesPlayed: 1 },
//   ];
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return total + player.playtime / player.gamesPlayed;
//   }, 0);
//   const averageScore = totalAveragePlaytimePerGame / players.length;


//32
// const calculateTotalBalance = users => {
//     return users.reduce((acc, user) => acc + user.balance, 0);
//  };


//33
// const getTotalFriendCount = users => {
//     return users.reduce((acc, user) => acc + user.friends.length, 0);
// };
// console.log (getTotalFriendCount)


//34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// const ascendingReleaseDates =  [...releaseDates].sort();
// const alphabeticalAuthors =  [...authors].sort();


//35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


//36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
//     const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


//37
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
//   const sortedByAuthorName = [...books].sort((firstName,secondName)=>firstName.author.localeCompare(secondName.author));
//   const sortedByReversedAuthorName = [...books].sort((firstName,secondName)=>secondName.author.localeCompare(firstName.author)); 
//   const sortedByAscendingRating = [...books].sort((first, second)=> first.rating-second.rating);
//   const sortedByDescentingRating = [...books].sort((first, second)=> second.rating-first.rating);


//38
// const sortByAscendingBalance = users => { 
//     const total = [...users].sort(
//     (a, b) => a.balance - b.balance) 
//     return total;
//   };


//39
// const sortByDescendingFriendCount = users => {
//     const total = [...users].sort(
//     (a, b) => b.friends.length - a.friends.length);
//     return total;
// };


//40
// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name))
//  };


//41 Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.  Используется цепочка методов filter, map, sort.  
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Пиши код ниже этой строки
  
//   const names = [...books]
//     .sort((a, b) => a.rating - b.rating)
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map((book) => book.author).sort();


//42 Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// const getNamesSortedByFriendCount = users => {
//     return [...users]
//    .sort((a, b) => a.friends.length - b.friends.length)
//    .map(user => user.name)
//  };


//43 Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// const getSortedFriends = users => {
//     return [...users]
//    .flatMap((user) => user.friends)
//    .filter((friends, index, users) => users.indexOf(friends) === index)
//    .sort();
//  };


//44 Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//   	.filter((user) => user.gender === gender)
//   	.reduce((acc, user) => acc + user.balance, 0);
// };
