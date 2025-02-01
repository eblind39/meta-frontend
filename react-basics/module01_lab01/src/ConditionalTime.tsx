const ConditionalTime = () => {
    const today: Date = new Date();
    const tomorrow: Date = new Date();
    tomorrow.setDate(today.getDate() + 1);  // increment the day by 1
    const day: string = tomorrow.toLocaleString('en-US', { weekday: 'long' });
    const morning: boolean = today.getHours() >= 6 && today.getHours() <= 19;
    let dayMessage: string = '';

    if (day.toLocaleLowerCase() === 'monday') {
        dayMessage = `Happy ${day}`;
    } else if (day.toLocaleLowerCase() === 'tuesday') {
        dayMessage = `${day}, four days to go`;
    } else if (day.toLocaleLowerCase() === 'wednesday') {
        dayMessage = `${day}, half way there`;
    } else if (day.toLocaleLowerCase() === 'thursday') {
        dayMessage = `${day}, start planning the weekend`;
    } else if (day.toLocaleLowerCase() === 'friday') {
        dayMessage = `${day}!, Woo - hoo, the weekend is coming!`;
    } else {
        dayMessage = `Stay calm and keep having fun this ${day}!`;
    }

    return (
        <div>
            <h1>{dayMessage}</h1>
            { morning ? <h2>Have you had breakfast yet?</h2> : '' }
        </div>
    )
}

export default ConditionalTime;