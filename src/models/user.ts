import { v4 as uuidv4 } from 'uuid';
import { User as UserType, Item } from '../types/cartUtilityTypes';

export class User implements UserType {
    id: string;
    name: string;
    age: number;
    cart: Item[];

    constructor(name: string, age: number) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.cart = [];
    }

    addToCart(item: Item): void {
        this.cart.push(item);
    }

    removeFromCart(itemId: string): void {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    removeQuantityFromCart(itemId: string, quantity: number): void {
        let removalCount = 0;
        this.cart = this.cart.reduce((acc: Item[], currentItem) => {
            if (currentItem.id === itemId && removalCount < quantity) {
                removalCount++;
            } else {
                acc.push(currentItem);
            }
            return acc;
        }, []);
    }

    printCart(): void {
        this.cart.forEach(item => console.log(`${item.name}: $${item.price}`));
    }

    cartTotal(): number {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
}