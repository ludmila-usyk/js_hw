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
//         this.#brand = newBrand;
//    }
//   }
// //    const audi = new Car ({ brand: 'Audi', model: 'Q3', price: 36000 });
// //    audi.getBrand();
// //    console.log(audi);
// //    audi.changeBrand('Ford');
// //    audi.getBrand();
// //    console.log(audi);


//12

