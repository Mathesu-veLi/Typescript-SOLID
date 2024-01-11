import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(private readonly cart: ShoppingCart) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Your cart is empty');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Order with a total of R$${this.cart.total()} has been received`);
        this.saveOrder();
        this.cart.clear();
    }

    sendMessage(msg: string): void {
        console.log('Message sent: ' + msg);
    }

    saveOrder(): void {
        console.log('Order saved');
    }
}
