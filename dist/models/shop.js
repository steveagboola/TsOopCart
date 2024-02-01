"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
class Shop {
    constructor() {
        this.items = [];
        // Initial items can be added here if needed
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
    // Optional: Method to remove an item from the shop by ID
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
}
exports.Shop = Shop;
