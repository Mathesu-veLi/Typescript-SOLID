import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
    private readonly _items: Array<CartItem> = [];

    get items(): Readonly<CartItem[]> {
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

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log('Cart cleared');
        this._items.length = 0;
    }
}
