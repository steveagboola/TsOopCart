import { Shop } from './classes/shop';
import { User } from './classes/user';

const main = () => {
    // Create Shop and User
    const shop = new Shop();
    const user = new User("John Doe", 30);

    // Add items to cart
    const items = shop.getItems;
    user.addToCart(items[0]);
    user.addToCart(items[1]);

    // Print Cart
    console.log("Cart before removal:");
    user.printCart();

    // Remove one item completely
    user.removeFromCart(items[0]);

    // Remove quantity from another item
    user.removeQuantityFromCart(items[1], 1);

    // Print Cart again
    console.log("Cart after removal:");
    user.printCart();
};

main();