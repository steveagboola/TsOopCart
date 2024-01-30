"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const item_1 = require("./item");
class Shop {
    constructor() {
        this.items = [];
        // Initialize with three items
        this.items.push(new item_1.Item("Item 1", 100, "Description for Item 1"));
        this.items.push(new item_1.Item("Item 2", 200, "Description for Item 2"));
        this.items.push(new item_1.Item("Item 3", 300, "Description for Item 3"));
    }
    // Getters and Setters
    get getItems() {
        return this.items;
    }
    set setItems(items) {
        this.items = items;
    }
}
exports.Shop = Shop;
