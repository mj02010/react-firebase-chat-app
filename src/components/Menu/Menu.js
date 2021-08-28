import React,{useState} from 'react';
import SideMenu from '../SideMenu/SideMenu';
import './Menu.css';


function Menu() {

    const [showMenu,setShowMenu]=useState(false);

    return (
        <div>
            <button className="menu-btn" onClick={()=>{setShowMenu(true)}}><i className="material-icons">menu</i></button>
            <div className="overlay" onClick={()=>{setShowMenu(false)}} className={`overlay ${showMenu ? "overlay-active" : "overlay-inactive"}`}></div>
            <SideMenu class={`SideMenu ${showMenu ? "SideMenu-active" : "SideMenu-inactive"}`}/>
        </div>
    )
}

export default Menu
