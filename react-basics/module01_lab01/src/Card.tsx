interface Props {
    h2: string;
    h3: string;
}

const Card = ({h2, h3}: Props) => {
    return (
        <div className="card">
            <h2>{ h2 }</h2>
            <h3>{ h3 }</h3>
        </div>
    )
}

export default Card;