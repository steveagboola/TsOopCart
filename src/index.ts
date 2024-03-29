import { User } from './models/user';
import { Item } from './models/item';
import { Shop } from './models/shop';

// Create Shop and add items to it
const shop = new Shop();
const itemA = new Item("Item A", 100, "Description of Item A");
const itemB = new Item("Item B", 200, "Description of Item B");
const itemC = new Item("Item C", 300, "Description of Item C");

shop.addItem(itemA);
shop.addItem(itemB);
shop.addItem(itemC);

// Create a User
const user = new User("John Johns", 30);

// Functionality demonstration using the shop's inventory
console.log("Shop Inventory:");
shop.getItems().forEach(item => console.log(`${item.name}: $${item.price}`));

// Add Item A to the user's Cart
console.log("\nAdding Item A to John's cart...");
user.addToCart(itemA);
user.printCart();
console.log('Cart Total:', user.cartTotal());

// Add 3 Item B to the user's Cart
console.log("\nAdding 3 of Item B to John's cart...");
user.addToCart(itemB);
user.addToCart(itemB);
user.addToCart(itemB);
user.printCart();
console.log('Cart Total:', user.cartTotal());

// Attempt to remove all of Item B from the cart
console.log("\nRemoving all of Item B from John's cart...");
user.removeFromCart(itemB.id);
user.printCart();
console.log('Cart Total:', user.cartTotal());

// Adding and Removing Item C demonstration
console.log("\nAdding 3 of Item C to John's cart...");
user.addToCart(itemC);
user.addToCart(itemC);
user.addToCart(itemC);
user.printCart();
console.log('Cart Total:', user.cartTotal());

console.log("\nRemoving 2 of Item C from John's cart...");
user.removeQuantityFromCart(itemC.id, 2);
user.printCart();
console.log('Cart Total:', user.cartTotal());
