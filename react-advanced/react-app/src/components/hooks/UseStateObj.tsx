import { useState } from "react"; 
 
const UseStateObj = () => { 
  const [greeting, setGreeting] = useState({ 
                                greet: "Hello", 
                                place: "World" 
                            }); 
  console.log(greeting, setGreeting); 
 
  // correct way to update a state object
  function updateGreeting() { 
    setGreeting(prevState => {
                    return { ...prevState, place: "World-Wide Web" }
                }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}

export default UseStateObj;