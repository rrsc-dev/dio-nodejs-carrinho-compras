import createItem from "./services/item.js";
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

const item1 = await createItem("Teste 1", 20.99, 3);
const item2 = await createItem("Teste 2", 39.99, 1);
const item3 = await createItem("Teste 3", 309.99, 5);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);