import "../../css/little_lemon_menu.css"
import Dish, { TopDessert } from "../../types/dish"

const data: Array<Dish> = [
    {
        id: 1,
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "https://picsum.photos/200/300/?random",
        price: 5.00
    },
    {
        id: 2,
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "https://picsum.photos/200/300/?random",
        price: 4.50
    },
    {
        id: 3,
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "https://picsum.photos/200/300/?random",
        price: 6.00
    },
]

const topDesserts: Array<TopDessert> = data.map((dessert: Dish) => {
    return {
        id: dessert.id,
        image: dessert.image,
        content: `${dessert.title} - ${dessert.description}`,
        price: `$${dessert.price}`,
    }
})

const LittleLemonMenu = () => {
    return (
        <ul>
        {
            topDesserts.map((dessert: TopDessert) => {
                return (
                    <li key={dessert.id}>
                        <figure>
                            <img src={dessert.image} alt={dessert.content} />
                            <figcaption>
                                <h4>{dessert.content}</h4>
                                <p>{dessert.price}</p>
                            </figcaption>
                        </figure>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default LittleLemonMenu;