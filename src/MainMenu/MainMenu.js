import React from 'react';
import "./MainMenu.css"
import "../Common/Commons.css"

function MainMenu() {
    return (
        <div>
            <text class={"corner_text"}>BINCO INC. ADMINISTRATION APP</text>
            <text class={"title_text"}>MAIN MENU</text>
            <button className={"orange_button about_button"} type='button'><a href='/about' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>ABOUT</a></button>

            <button className={"orange_button my_profile_button"} type='button'><a href='/my_profile' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>MY PROFILE</a></button>

            <button className={"orange_button employees_button"} type='button'><a href='/employees' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>EMPLOYEES</a></button>

            <button className={"orange_button production_button"} type='button'><a href='/production' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>PRODUCTION</a></button>

            <button className={"orange_button stations_button"} type='button'><a href='/stations' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>STATIONS</a></button>

            <button className={"orange_button to_do_button"} type='button'><a href='/to_do' style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>TO DO</a></button>
        </div>
    );
}

export default MainMenu;