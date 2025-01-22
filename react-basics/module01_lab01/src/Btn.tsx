const Btn = () => {
    const clickHandler = () => console.log('Button clicked');

    const overHandler = () => console.log('Mouse over');

    return <button onClick={clickHandler} onMouseOver={overHandler}>Click me</button>;
}

export default Btn;