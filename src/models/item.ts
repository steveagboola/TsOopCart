import { v4 as uuidv4 } from 'uuid';
import { Item as ItemType } from '../types/cartUtilityTypes';

export class Item implements ItemType {
    id: string;
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
