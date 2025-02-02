const data = [
    {
        id: 1,
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "https://picsum.photos/200/300/?random",
        price: 5.00
    },
    {
        id: 1,
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "https://picsum.photos/200/300/?random",
        price: 4.50
    },
    {
        id: 1,
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "https://picsum.photos/200/300/?random",
        price: 6.00
    },
]

const topDesserts = data.map(dessert => {
    return {
        id: dessert.id,
        image: dessert.image,
        content: `${dessert.title} - ${dessert.description}`,
        price: `$${dessert.price}`,
    }
})

const LittleLemonMenu = () => {
    return (
        topDesserts.map((dessert, index) => {
            return (
                <div key={index}>
                    <figure>
                        <img src={dessert.image} alt={dessert.content} />
                        <figcaption>
                            <h4>{dessert.content}</h4>
                            <p>{dessert.price}</p>
                        </figcaption>
                    </figure>
                </div>
            )
        })
    )
}

export default LittleLemonMenu;