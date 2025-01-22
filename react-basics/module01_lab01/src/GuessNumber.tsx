function GuessNumber() {
    function handleClick() {
      let randomNum: number = Math.floor(Math.random() * 3 + 1);
      console.log('randomNum:', randomNum);
      let userInput: string | null = prompt('Type a number');
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }
  
    return (
      <div>
        <div>Task: Add a button and handle a click event</div>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>
    );
  }
  
  export default GuessNumber;