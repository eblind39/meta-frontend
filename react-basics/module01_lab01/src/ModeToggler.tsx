import React from "react";

const ModeToggler = () => {
    const [darkModeOn, setDarkModeOn] = React.useState(true);
    // let darkModeOn: boolean = true;
    const darkMode: JSX.Element = React.createElement('h1', null, 'Dark Mode is On');
    const lightMode: JSX.Element = React.createElement('h1', null, 'Light Mode is On');
    // const lightMode = <h1>Light Mode is On</h1>; // JSX valid syntax

    const changeTheme = () => { 
        setDarkModeOn(!darkModeOn); 
        console.log((darkModeOn ? 'Dark' : 'Light') + ' Mode is On');
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default ModeToggler;