const BtnHandling = () => {
    function thirdExample() {
        console.log('third example, ES5 separate fn');
    }

    const fourthExample = () => console.log('fourth example, ES6 separate fn');

    return (
        <button 
            onClick={function() { console.log('first example, inline anonym ES5 fn') }}
            onMouseOver={() => console.log('second example, inline anonym ES6 fn')}
            onMouseLeave={thirdExample}
            onMouseEnter={fourthExample}>
            Event Hndlg Approaches
        </button>
    )
}

export default BtnHandling;