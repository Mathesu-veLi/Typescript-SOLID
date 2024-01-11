import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
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
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
