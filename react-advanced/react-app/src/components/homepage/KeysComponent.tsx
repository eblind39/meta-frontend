import { useState } from "react";
import ToDo from "../../types/todo";
import "../../css/controlled_uncontrolled.css"

const KeysComponent = () => {
    const [todos, setTodos] = useState<Array<ToDo>>([
        { id: 100, text: 'Learn React', createdAt: '18:00' },
        { id: 300, text: 'Learn Redux', createdAt: '20:30' },
        { id: 200, text: 'Learn GraphQL', createdAt: '14:20' },
    ]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }

    return (
        <div className="contruncontr-container">
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {
                        todos.map((todo: ToDo, index: number) => {
                            return (
                                <tr key={todo.id}>
                                    <td>{index}.</td>
                                    <td>{todo.id}</td>
                                    <td><input type="text" value={todo.text} /></td>
                                    <td>{todo.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <i>If you use the map index as key, React can't identify changes in DOM after reverse the array items</i>
        </div>
    )
}

export default KeysComponent;