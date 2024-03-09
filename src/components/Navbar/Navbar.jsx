import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

 const Navbar =() => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu =() =>{
        setOpenMenu(!openMenu);
    };
    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>        

        <nav className="nav-wrapper">
            <div className="nav-content">
                 <img className="logo" src="./assets/images/logo.jpeg" alt=""/>
                <ul>
                    <li>
                         <a href="/" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item">Contact me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>
                <button className="menu-btn" onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"} style={{ fontSize: "1.9rem"}}>
                    <img src="./assets/images/menu.png" alt="" style={{ height: "1.5rem", width: "1.5rem" }} />
                        {openMenu ? "" : ""}
                    </span>
                </button>
            </div>
        </nav>
        </>
        )
 }

 export default Navbar