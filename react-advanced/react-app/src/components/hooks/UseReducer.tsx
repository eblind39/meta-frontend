import { useReducer } from "react";

/*
 * Working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.
 * The useReducer hook is best used on more complex data, specifically, arrays or objects.
 */

interface Revenue {
    money: number
}

/*interface ActionType {
    type: string
}*/

const reducer = (state: any, action: any) => {
    if (action.type === 'buy_ingredients') return { money: state?.money - 10 }
    if (action.type === 'sell_a_meal') return { money: state?.money + 10 }
    if (action.type === 'celebrity_visit') return { money: state?.money + 5000 }
}

const UseReducer = () => {
    const initialState: Revenue = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className="contruncontr-container">
            <h1>Wallet: {state?.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies</button>
                <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
                <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity visit</button>
            </div>
        </div>
    )
}

export default UseReducer;