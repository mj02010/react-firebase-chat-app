import React from 'react';
import Signout from '../Signout/Signout';
import './SideMenu.css';


function SideMenu(props) {
    return(
        <div className={props.class}>
            <Signout/>
        </div>
    )
}

export default SideMenu;