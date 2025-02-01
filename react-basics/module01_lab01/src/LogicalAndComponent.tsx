const LogicalAndComponent = () => {
    const val = prompt("Enter a number, anything but a 0");

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {
                val && <h2>Yay, no 0 was typed in!</h2>
                // val && React.createElement('h2', null, 'Yay, no 0 was typed in!')
            }
        </div>
    )
}

export default LogicalAndComponent;

// true && console.log('This will show')
// false && console.log('This will never show')