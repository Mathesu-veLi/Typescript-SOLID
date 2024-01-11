import { OrderStatus } from './interfaces/order-status';
import { Messaging } from './messaging';
import { Persistency } from './persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Your cart is empty');
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(
            `Order with a total of R$${this.cart.total()} has been received`,
        );
        this.persistency.saveOrder();
        this.cart.clear();
    }
}
