import Order from "../types/order"

const order: Order = {
    id: 1,
    username: "John Doe",
    item: "Pizza Margherita",
    price: "$30.00"
}

const orderCopy: Order = { ...order };

const orderAmend: Order = {
    ...order,
    item: "Pizza Prosciutto",
}

console.log(orderCopy, orderAmend);