import React, { createContext, useContext, useState } from "react"
import User from "../types/user";

const UserContext = createContext<User>({
    name: "",
    email: "",
    dob: "",
});

interface Props {
    children: React.ReactNode
}

const UserProvider = ({ children }: Props) => {
    const [user] = useState<User>({
        name: "John",
        email: "john@example.com",
        dob: "01/01/2000",
    });

    return (
        <UserContext.Provider value={ user }>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);

export default UserProvider;