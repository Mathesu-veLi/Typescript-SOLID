interface CartItem {
    name: string;
    price: number;
}

export class ShoppingCart {
    private readonly _items: Array<CartItem> = [];
    private orderStatus: 'open' | 'closed' = 'open';

    get items(): CartItem[] {
        return this._items;
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

        this.orderStatus = 'closed';
        this.sendMessage('Order received');
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
shoppingCart.clear();
console.log(shoppingCart.items);
