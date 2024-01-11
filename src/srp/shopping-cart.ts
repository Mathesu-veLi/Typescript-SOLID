interface CartItem {
    name: string;
    price: number;
}

export class ShoppingCart {
    private readonly _items: Array<CartItem> = [];

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(itemIndex: number): void {
        this._items.splice(itemIndex, 1);
    }
}
