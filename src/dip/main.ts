import { Messaging } from './classes/services/messaging';
import { Order } from './classes/order';
import { Persistency } from './classes/services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();
class MessagingMock implements MessagingProtocol {
    sendMessage(): void {
        console.log('A mensagem foi enviada pelo MOCK');
    }
}
const messagingMock = new MessagingMock();

const persistency = new Persistency();

//const individualCustomer = new IndividualCustomer('Matheus', 'Silva', '111.111.111-11');
const enterpriseCustomer = new EnterpriseCustomer('Enterprise', '22222222222222222');
const order = new Order(shoppingCart, messagingMock, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 20.0));
shoppingCart.addItem(new Product('Lápis', 0.9));

console.log(shoppingCart.items);

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
console.log(order.orderStatus);
