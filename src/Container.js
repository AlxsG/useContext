import React, {useContext} from 'react';
import Lightswitch from './Lightswitch';
import {DarkModeContext} from './Context/DarkModeContext';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Lightswitch />
        </div>
    )
}

export default Container
