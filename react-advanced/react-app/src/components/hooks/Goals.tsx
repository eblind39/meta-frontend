import React, { SyntheticEvent, useState } from "react"
import Goal from "../../types/goal"

interface GoalsProps {
    onAdd: (formData: Goal) => void
}

const GoalForm = ({ onAdd }: GoalsProps) => {
    const [formData, setFormData] = useState<Goal>({
                                    goal: "",
                                    by: ""
                                });

        const changeHandler = (e: SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as HTMLInputElement;
            const {name, value} = target;
            setFormData({ ...formData, [name]: value });
        }

        const submitHandler = (e: SyntheticEvent) => {
            e.preventDefault();
            onAdd(formData);
            setFormData({ goal: "", by: "" });
        }

    return (
        <React.Fragment>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal..." value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </React.Fragment>
    )
}

interface ListOfGoalsProps {
    allGoals: Array<Goal>
}

const ListOfGoals = ({ allGoals }: ListOfGoalsProps) => {
    return (
        <ul>
            {
                allGoals.map((goal: Goal) => 
                    <li key={goal.goal}>
                        <span>My goal is to {goal.goal}, by {goal.by}</span>
                    </li>
                )
            }
        </ul> 
    );
}

const Goals = () => {
    const [allGoals, updateAllGoals] = useState<Array<Goal>>([]);

    const addGoal = (goal: Goal) => updateAllGoals([...allGoals, goal]);

    return (
        <div className="contruncontr-container">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    )
}

export default Goals;