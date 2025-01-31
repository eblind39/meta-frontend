import React from "react";

const MealsContext = React.createContext<Array<string>>([]);

const todaysMeals: Array<string> = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

interface Props {
    children: React.ReactNode;
}

const MealsProvider = ({ children }: Props) => {
    const [meals] = React.useState<Array<string>>(todaysMeals);

    return (
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;