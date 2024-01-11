import { CustomerOrder } from './interfaces/customer-protocol';
import { OrderStatus } from './interfaces/order-status';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
        private readonly customer: CustomerOrder,
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
            `Order with a total of R$${this.cart.totalWithDiscount()} has been received`,
        );
        this.persistency.saveOrder();
        this.cart.clear();

        console.log('O cliente é: ', this.customer.getName(), this.customer.getIDN());
    }
}
