import React from 'react'
import './Navbar.css'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const handleClose = () => {
        const mobileNavbar = document.getElementById('mobile-navbar')
        mobileNavbar.style.left = '-100%';
    }
    const handleBurger = () => {
        const mobileNavbar = document.getElementById('mobile-navbar')
        mobileNavbar.style.left = '0%';
    }
    return (
        <>
            <div class="mobile-navbar " id='mobile-navbar'>
                <div class="mobile-navbar__close" id='closeBtn' onClick={handleClose} >
                    <IoMdClose />
                </div>
                <ul class="mobile-navbar__links">
                    <li><a href="/Home">Home</a> </li>
                    <li><a href="/About">About</a> </li>
                    <li><a href="/Testimonials">Testimonials</a> </li>
                    <li><a href="/Contact">Contact</a> </li>
                </ul>
            </div>
            <div className='Navbar'>
                <div className="Navbar_img">
                    <img src='/src/assets/logo.png' alt="" />
                </div>
                <div className="Navbar_links">
                    <ul>
                        <li><a href="/Home">Home</a> </li>
                        <li><a href="/About">About</a> </li>
                        <li><a href="/Testimonials">Testimonials</a> </li>
                        <li><a href="/Contact">Contact</a> </li>
                    </ul>
                </div>
                <div className="Navbar_btns">
                    <a className='btn_signin_link'>Sign In</a>
                    <a className='btn_register_link'>Register</a>
                </div>
                <div class="mobile-hamb" onClick={handleBurger}>
                    <IoIosMenu /></div>
            </div>
        </>
    )
}

export default Navbar