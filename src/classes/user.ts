import { v4 as uuidv4 } from 'uuid';
import { Item } from './item';

export class User {
    private id: string;
    private name: string;
    private age: number;
    private cart: Item[];

    constructor(name: string, age: number) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.cart = [];
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

    get getAge(): number {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }

    get getCart(): Item[] {
        return this.cart;
    }

    // Methods
    addToCart(item: Item): void {
        this.cart.push(item);
    }

    removeFromCart(item: Item): void {
        this.cart = this.cart.filter(cartItem => cartItem.getId !== item.getId);
    }

    removeQuantityFromCart(item: Item, quantity: number): void {
        const filteredCart = [];
        let count = quantity;
        for (let cartItem of this.cart) {
            if (cartItem.getId !== item.getId || count === 0) {
                filteredCart.push(cartItem);
            } else {
                count--;
            }
        }
        this.cart = filteredCart;
    }

    cartTotal(): number {
        return this.cart.reduce((total, item) => total + item.getPrice, 0);
    }

    printCart(): void {
        console.log(this.cart.map(item => `${item.getName}: ${item.getPrice}`).join(', '));
    }
}