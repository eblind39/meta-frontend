import { useEffect, useState } from "react";
import UserData from "../../types/userdata";

const UseEffectIV = () => {
    const [userData, setUserData] = useState<UserData | undefined>(undefined);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?resultsets=1")
            .then(response => response.json())
            .then(data => setUserData(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        typeof userData != undefined  ?
        <div className="contruncontr-container">
            <h1>Data returned</h1>
            <h2>First name: {userData?.results[0].name.first}</h2>
            <h2>Last name: {userData?.results[0].name.last}</h2>
        </div> :
        <h1>Data pending...</h1>
    )
}

export default UseEffectIV;