import { v4 as uuidv4 } from 'uuid';

export class Item {
    private id: string;
    private name: string;
    private price: number;
    private description: string;

    constructor(name: string, price: number, description: string) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // Getters and Setters
    get getId(): string {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getPrice(): number {
        return this.price;
    }

    set setPrice(price: number) {
        this.price = price;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(description: string) {
        this.description = description;
    }
}