import { useUser } from "../../providers/UserProvider";

const LoggedInUser = () => {
    const user = useUser();

    return (
        <p style={{float: "right", marginTop: "-2px"}}>
            Hello <span className="Username">{ user.name }</span>
        </p>
    )
}

export default LoggedInUser;