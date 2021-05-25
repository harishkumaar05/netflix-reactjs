import React, { useState, useEffect } from 'react';
import './Nav.css';
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (  
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"
            alt="netflix logo"
            />
            <img className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
            alt="netflix logo"/>
        </div>
    );

}
 
export default Nav ;