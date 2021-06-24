//1
// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
//   };
//   const child = Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;


//2
// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
//   };
//   const parent = Object.create(ancestor);
//   parent.name = 'Stacey';
//   parent.surname = 'Moore';
//   parent.age = 54;
//   const child = Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;
  

//3
// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   const car = new Car();


//4
// function Car({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }


//5
// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   Car.prototype.getPrice = function () {
//     return this.price;
//   };
//   Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };


//6
// С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
/////////
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function getItems() {
//   return this.items;
// }
// Storage.prototype.addItem = function addItem(newItem) {
//   return this.items.push(newItem);
// }
// Storage.prototype.removeItem = function removeItem(item) {
//   const index = this.items.indexOf(item);
//   return this.items.splice(index, 1);
// }
// // Пиши код выше этой строки
//   const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem('Дроид');
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem('Пролонгер');
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//7 функция-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function() {
//   return `${this.value}`;
// };
// StringBuilder.prototype.padEnd = function(str) {
// this.value = `${this.value}${str}`;  
// };
// StringBuilder.prototype.padStart = function(str) {
//   this.value = `${str}${this.value}`;
// };
// StringBuilder.prototype.padBoth = function(str) {
//   this.value = `${str}${this.value}${str}`;
// };


//8
//class Car {};

//9
// class Car {
//     brand;
//     model;
//     price;
  
//      constructor({ brand, model, price }){
//       this.brand = brand;
//       this.model = model;
//       this.price = price;   
//      }
//   }


//10
// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//       getPrice() {
//       return this.price;
//     }
//         changePrice(newPrice) {
//       this.price = newPrice;
//       }
//   }


//11
// class Car {
//     #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//    getBrand() {
//        return this.#brand;
//    }
//    changeBrand(newBrand) {
//         this.brand = newBrand;
//    }
//   }
// //    const audi = new Car ({ brand: 'Audi', model: 'Q3', price: 36000 });
// //    audi.getBrand();
// //    console.log(audi);
// //    audi.changeBrand('Ford');
// //    audi.getBrand();
// //    console.log(audi);


//12 Задание Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным. Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// //after
// class Storage {
//     #items
//     constructor(items){
//     this.#items = items;
//     }
//     getItems () {
//     return this.#items;
//   }
//     addItem (newItem) {
//    return this.#items.push(newItem);
//   }
//     removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
//   };
//   // Пиши код выше этой строки
//   const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem("Дроид");
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem("Пролонгер");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// //before
// function Storage(items) {
//     this.items = items;
//   }
  
//   Storage.prototype.getItems = function () {
//     return this.items;
//   };
  
//   Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
//   };
  
//   Storage.prototype.removeItem = function (item) {
//     const itemIndex = this.items.indexOf(item);
//     this.items.splice(itemIndex, 1);
//   };
  
//   // Пиши код выше этой строки
//   const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem("Дроид");
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem("Пролонгер");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
  

//13 Задание: Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным. Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// after
// class StringBuilder {
//     #value
//        constructor(value){
//        this.#value = value;
//        }
//     getValue () {
//        return this.#value;
//     }
//     padEnd (str) {
//            this.#value += str;
//      }
//     padStart (str) {
//             this.#value = str + this.#value;
//   };
//       padBoth (str) {
//             this.padStart(str);
//            this.padEnd(str);
//   };}
//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='

// //Before
// function StringBuilder(baseValue) {
//     this.value = baseValue;
//   }
//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };
//   StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
//   };
//   StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
//   };
//   StringBuilder.prototype.padBoth = function (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='


//14
// class Car {
//     #model;
//     #price;
//     #brand;
  
//     constructor({ model, price, brand }) {
//       this.#model = model;
//       this.#price = price;
//       this.#brand = brand;
//     }
  
//     get model() {
//       return this.#model;
//     }
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
//   }


//15 Задание Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля. Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
//after
// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//       this.#price = price;
//     }
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//      if (newPrice <= Car.MAX_PRICE) {
//          this.#price = newPrice;
//     }
//       return this.#price;  }  
//     // Пиши код выше этой строки
//   }
  
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000
//before
// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 10000;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Пиши код выше этой строки
//   }
  
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000


//16
// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//       static checkPrice(price) {
//       if (price > this.#MAX_PRICE) return 'Внимание! Цена превышает допустимую.';
//       return 'Всё хорошо, цена в порядке.'
//       }
//     // Пиши код выше этой строки
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
//   console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
//   console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


//17 В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список. Объяви класс Admin, который наследует от класса User. Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.
// class User {
//     email;
//     constructor(email) {
//       this.email = email;
//     }
//     get email() {
//       return this.email;
//     }
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Пиши код ниже этой строки
//   class Admin extends User {
//    static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
//   }


//18
// class User {
//     email;
//     constructor(email) {
//       this.email = email;
//     }
//     get email() {
//       return this.email;
//     }
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Пиши код ниже этой строки
//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
//   accessLevel;
//      constructor({ email, accessLevel }) {
//           super(email);
//           this.accessLevel = accessLevel;
//        };
//   }
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser


//19
// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Пиши код ниже этой строки
  
//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
  
//     accessLevel;
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
//      blacklistedEmails = [];
  
//      blacklist(email) {
//        this.blacklistedEmails.push(email);
//      }
  
//      isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//      }
//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true 
