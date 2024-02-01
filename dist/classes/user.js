"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    // Getters and Setters
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
    get getCart() {
        return this.cart;
    }
    // Methods
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter(cartItem => cartItem.getId !== item.getId);
    }
    removeQuantityFromCart(item, quantity) {
        const filteredCart = [];
        let count = quantity;
        for (let cartItem of this.cart) {
            if (cartItem.getId !== item.getId || count === 0) {
                filteredCart.push(cartItem);
            }
            else {
                count--;
            }
        }
        this.cart = filteredCart;
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice, 0);
    }
    printCart() {
        console.log(this.cart.map(item => `${item.getName}: ${item.getPrice}`).join(', '));
    }
}
exports.User = User;
