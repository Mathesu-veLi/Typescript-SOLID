import { CartItem } from './interfaces/cart-item';
import { OrderStatus } from './interfaces/order-status';

export class ShoppingCart {
    private readonly _items: Array<CartItem> = [];
    private _orderStatus: OrderStatus = 'open';

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(itemIndex: number): void {
        this._items.splice(itemIndex, 1);
    }

    total(): number {
        return +this._items.reduce((total, item) => total + item.price, 0).toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Your cart is empty');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Order with a total of R$${this.total()} has been received`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log('Message sent: ' + msg);
    }

    saveOrder(): void {
        console.log('Order saved');
    }

    clear(): void {
        console.log('Cart cleared');
        this._items.length = 0;
    }
}

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
