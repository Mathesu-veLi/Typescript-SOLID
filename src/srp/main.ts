import { Order } from './order';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

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
