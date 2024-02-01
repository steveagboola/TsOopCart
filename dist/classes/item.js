"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
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
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }
}
exports.Item = Item;
