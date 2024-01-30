import { Item } from './item';

export class Shop {
    private items: Item[];

    constructor() {
        this.items = [];
        // Initialize with three items
        this.items.push(new Item("Item 1", 100, "Description for Item 1"));
        this.items.push(new Item("Item 2", 200, "Description for Item 2"));
        this.items.push(new Item("Item 3", 300, "Description for Item 3"));
    }

    // Getters and Setters
    get getItems(): Item[] {
        return this.items;
    }

    set setItems(items: Item[]) {
        this.items = items;
    }
}