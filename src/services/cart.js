async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: R$${result}`);
}

async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName);

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

async function displayCart(userCart) {
    console.log("Carrinho: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} - ${item.quantity}x | Subtotal: R$${item.subtotal()}`)
    });
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

export {
    addItem, 
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}