import { Item } from "./item";

export class Shop {
    private items: Item[] = [];

    constructor() {
        // Initial items can be added here if needed
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    getItems(): Item[] {
        return this.items;
    }

    // Optional: Method to remove an item from the shop by ID
    removeItem(itemId: string): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }
}