//ações do carrinho

    // adicionar item
    // deletar item
    // alterar quantidade do item
    // calcular total


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

async function removeItem(userCart, index) {
    
}

export {
    addItem, 
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}