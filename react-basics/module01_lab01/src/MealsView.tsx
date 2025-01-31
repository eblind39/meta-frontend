import MealsProvider from "./MealsProvider";
import MealsList from "./MealsList";
import MealsCounter from "./MealsCounter";

const MealsView = () => {
    return (
        <div>
            <MealsProvider>
                <MealsList />
                <MealsCounter />
            </MealsProvider>
        </div>
    )
}

export default MealsView;