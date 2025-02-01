import { useState, useRef, SyntheticEvent } from "react"; 
import "./css/calculator.css";
  
const Calculator = () => { 
    const inputRef = useRef<HTMLInputElement>(null); 
    const resultRef = useRef<HTMLParagraphElement>(null); 
    const [result, setResult] = useState<number>(0); 

    function plus(e: SyntheticEvent) { 
        e.preventDefault(); 
        setResult((result) => result + Number(inputRef.current?.value || '0')); 
    }; 

    function minus(e: SyntheticEvent) { 
        e.preventDefault(); 
        setResult((result) => result - Number(inputRef.current?.value || '0')); 
    };

    function times(e: SyntheticEvent) { 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef.current?.value || '0')); 
    }; 

    function divide(e: SyntheticEvent) { 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current?.value || '0')); 
    };

    function resetInput(e: SyntheticEvent) {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = '0';
        }
    }; 

    function resetResult(e: SyntheticEvent) {
        e.preventDefault();
        setResult((prevVal: number) => prevVal * 0);
        if (resultRef.current) {
            resultRef.current.innerHTML = '0';
        }
    }; 
   
    return ( 
        <div className="App"> 
            <div> 
                <h1>Simplest Working Calculator</h1> 
            </div> 
            <form> 
                <p ref={resultRef}> 
                    { result } 
                </p> 
                <input
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number" /> 
                <button onClick={plus}>add</button>
                <button onClick={minus}>substract</button>
                <button onClick={times}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>
            </form> 
        </div> 
    ); 
}
   
export default Calculator;