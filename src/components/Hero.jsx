import React from 'react'
import './Hero.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

function Hero() {
  return (
   <section id='hero' className='hero-section'>
    <div className="container">
        <img className='bg-shape'src='/src/assets/hero-bg.png' alt="" />
        <div className="hero-content">
            <div className="hero-content__text">
                <h4>Plan your trip now</h4>
                <h1>Save <span className='orange'>big</span> with our car rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className="hero-content__btns">
                    <a href="/" className='hero-content__text__btns__book-ride'>Book Ride &nbsp;<IoIosCheckmarkCircle /></a>
                    <a href="/" className='hero-content__text__btns__learn-more'>Learn More &nbsp;<FaChevronRight /></a>
                </div>
            </div>
            <img  src="/src/assets/lamborghini-urus.png" alt="" />
        </div>
    </div>
   </section>
  )
}

export default Hero