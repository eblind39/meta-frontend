import FruitType from "./types/fruittype";

interface Props {
    fruitsprop: Array<FruitType>;
}

function FruitsCounter({fruitsprop}: Props) {
    return (
        <h2>Total fruits: {  fruitsprop.length }</h2>
    )
}

export default FruitsCounter;