import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem({
    name: 'Apple',
    price: 10,
});
shoppingCart.addItem({
    name: 'Orange',
    price: 20,
});
shoppingCart.addItem({
    name: 'Banana',
    price: 30,
});
console.log(shoppingCart.items);

order.checkout();
console.log(order.orderStatus);
