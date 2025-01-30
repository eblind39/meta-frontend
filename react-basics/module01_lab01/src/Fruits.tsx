import FruitType from './types/fruittype'

interface Props {
    fruitsprop: Array<FruitType>;
}

function Fruits({ fruitsprop }: Props) {
    return (
        <div>
            {fruitsprop.map((f: FruitType) => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;