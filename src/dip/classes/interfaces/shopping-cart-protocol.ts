import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
    items: Readonly<CartItem[]>;

    addItem(item: CartItem): void;
    removeItem(itemIndex: number): void;
    total(): number;
    totalWithDiscount(): number;
    isEmpty(): boolean;
    clear(): void;
}
