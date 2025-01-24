interface MainProps {
    msg: string;
}

const Main = ({ msg }: MainProps) => {
    return <Header msg={msg} />
}

interface HeaderProps {
    msg: string;
}

const Header = ({ msg }: HeaderProps) => {
    return (
        <div style={{ border: "1px solid whitesmoke" }}>
            <h1>Header here</h1>
            <Wrapper msg={msg} />
        </div>
    )
}

interface WrapperProps {
    msg: string;
}

const Wrapper = ({ msg }: WrapperProps) => {
    return (
        <div style={{ border: "1px solid lightgray" }}>
            <h2>Wrapper here</h2>
            <ButtonAux msg={msg} />
        </div>
    )
}

interface ButtonAuxProps {
    msg: string;
}

const ButtonAux = ({ msg }: ButtonAuxProps) => {
    return (
        <div style={{ border: "20px solid orange" }}>
            <h3>This is the Button component</h3>
            <button onClick={() => alert(msg)}>Click me!</button>
        </div>
    )
}

const PropDrillingContainer = () => {
    return <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
}

export default PropDrillingContainer;