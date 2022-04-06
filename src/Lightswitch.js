import React, {useContext} from 'react';
import {DarkModeContext} from './Context/DarkModeContext';

function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ? 
            `../img/on.png` : `../img/off.png`} alt="Lightswitch on" onClick={handleClick}/>          
        </div>
    )
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default Lightswitch
