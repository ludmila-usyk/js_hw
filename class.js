class Car {
    constructor ({brand, model, price} = {}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
}
console.dir(Car);
const CarBuy = new Car ({
    brand: 'audi',
    model: 'a5',
    price: '30000',
})
console.log(CarBuy);