import React from 'react';
import './FirstPage.css';
import "../Common/Commons.css"

function FirstPage() {
    return (
        <div>
            <img id='binco_logo' src='/Images/binco_logo.png' alt='BINCO' />
            <text class={"corner_text"}>BINCO INC. ADMINISTRATION APP</text>
            <button class={"orange_button enter_button"} type='button' ><a href='/menu' style={{color: 'inherit', textDecoration: 'none'}}>ENTER</a></button>
        </div>
    );
}

export default FirstPage;