interface Dish {
    id: number
    title: string
    description: string
    image: string
    price: number
}

interface TopDessert {
    id: number
    image: string
    content: string
    price: string
}

export default Dish;
export { TopDessert };