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
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }
    removeQuantityFromCart(itemId, quantity) {
        let removalCount = 0;
        this.cart = this.cart.reduce((acc, currentItem) => {
            if (currentItem.id === itemId && removalCount < quantity) {
                removalCount++;
            }
            else {
                acc.push(currentItem);
            }
            return acc;
        }, []);
    }
    printCart() {
        this.cart.forEach(item => console.log(`${item.name}: $${item.price}`));
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
}
exports.User = User;
