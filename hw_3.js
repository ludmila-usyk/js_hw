//1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr:  "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     };


//2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner: {
//   	name: "Henry",
//   	phone: "982-126-1588",
//   	email: "henry.carter@aptmail.com",}
//   };


//3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//console.log(apartment);


//4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//      descr: "Spacious apartment in the city center",
//      rating: 4,
//      price: 2153,
//      tags: ["premium", "promoted", "top"],
//      owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//      }};
//      const ownerName = apartment.owner.name;
//      const ownerPhone = apartment.owner.phone;
//      const ownerEmail = apartment.owner.email;
//      const numberOfTags = apartment.tags.length;
//      const firstTag = apartment.tags[0];
//      const lastTag = apartment.tags[2];


//5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];


//6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = 'Henry Sibola';
//   apartment.tags.push('trusted');


//7
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//    apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {country: 'Jamaica', city: 'Kingston' };


//8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];
// const product = {name, price, image, tags};


//9
// const emailInputName = 'email';
// const passwordInputName = 'password';
// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam"
// };
// console.log(credentials);


//10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   for (const key in apartment) {
//     console.log('Key: ', key);
//   }
//   const keys = ['descr', 'rating', 'price'];
//   const values = ['Spacious apartment in the city center', 4, 2153];


//11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);}
// }
//  console.log(keys);
//  console.log(values);


//12
// function countProps(object) {
//     let propCount = Object.values(object).length;
//      return propCount;
//     }


//13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//   values.push(apartment[key]);}


//14
// function countProps(object) {
//     let propCount = 0;
//    const keys = Object.keys(object)
//    for (const key of keys) {
//     propCount += 1;}
//     return propCount;
//    }


//15
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);


//16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   const arrayOfSalaries = Object.values(salaries);
//     for (const salary of arrayOfSalaries) {
//       totalSalary += salary;
//     }
//     return totalSalary;
//   }


//17
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
//   for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   }


//18
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   function getProductPrice(productName) {
//     for(let elem of products) {
//         if(elem.name === productName) {
//           return elem.price
//       }
//     }
//     return null
//   }


//19
// function getAllPropValues(propName) {
//     const arr = [];
//     for (const product of products) {
//         if (product[propName]) {
//             arr.push(product[propName])
//         }
//     }
//     return arr;
// }


//20
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   function calculateTotalPrice(productName) {
//   let total = 0;
//    for (const product of products){
//     for (const key in product){
//      if (product.name === productName)
//      total = product.price * product.quantity
//   }}
//   return total;
//   }


//21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   const {yesterday, today, tomorrow} = highTemperatures;
//   const meanTemperature = (yesterday + today + tomorrow) / 3;


//22
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//     const {
//       yesterday,
//       today,
//       tomorrow,
//       icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     } = highTemperatures;
    
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);


//23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//     const {
//       yesterday: highYesterday,
//       today: highToday,
//       tomorrow: highTomorrow,
//       icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//        } = highTemperatures;
  
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


//24
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
//   for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }


//25
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   const {
//   today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
//   tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   } = forecast;


//26
// function calculateMeanTemperature(forecast) {
//     //  const todayLow = forecast.today.low;
//     //  const todayHigh = forecast.today.high;
//     //  const tomorrowLow = forecast.tomorrow.low;
//     //  const tomorrowHigh = forecast.tomorrow.high;
//     const {
//       today: { low: todayLow, high: todayHigh},
//       tomorrow: { low: tomorrowLow, high: tomorrowHigh }
    
//     } = forecast;
    
//       return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//     }
//     console.log(
//         calculateMeanTemperature({
//          today: { low: 28, high: 32 },
//          tomorrow: { low: 25, high: 29 },
//         })
//        );


//27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


//28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore =  Math.min(...allScores);


//29
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   const finalSettings = {...defaultSettings, ...overrideSettings};


//30
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//   const newData = { ...{ completed, category, priority }, ...data };
//    return newData;
//   }


//31
// function add(...args) {
//     let total = 0;
//       for (let i = 0; i < args.length; i += 1) {
//       total += args[i];}
//        return total;
//   }


//32
// function addOverNum(...args) {
//     let total = 0;
//     for (const arg of args) {
//        if(arg > args[0]) {
//     total += arg;
//        }
//      }
//      return total;
//    }


//33
// function findMatches(arr, ...args) {
//     const matches = [];
//     for (let element of args){
//      if (arr.includes(element))
//        matches.push(element)
//     }
//     return matches;
//    }


//34
// const bookShelf = {
//     books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//       return 'Returning all books';
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(name) {
//         return `Deleting book ${name}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     }
//   };


//35
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//       const bookShelf = this.books.indexOf(oldName);
//         this.books.splice (bookShelf, 1, newName);
//        return this.books;
//     },
//   };



//36
// const atTheOldToad = {
//     potions: [],
//     };


//37
// const atTheOldToad = {
//     getPotions() {
//     return this.potions},
//       potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     };
//console.log(atTheOldToad);


//38
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//   return this.potions.push(potionName);  
//     },
//   };


//39
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//      let delPotions = this.potions.indexOf(potionName);
//      this.potions.splice(delPotions, 1);
//     },
//   };


//40
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//      const potionIndex = this.potions.indexOf(oldName);
//       if (potionIndex ===-1) {
//         return oldName;}
//       this.potions.splice(potionIndex, 1, newName);
//     },
//   };


//41
  const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }
    this.potions.push(potionName);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let item of this.potions) {
      if (item.name === oldName) {
        item.name = newName;
      }
    }
  },
};

console.log(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //в массиве potions последним элементом будет этот объект
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); //в массиве potions последним элементом будет этот объект
console.log(atTheOldToad.removePotion("Dragon breath")); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.removePotion("Speed potion")); //[ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); //[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]