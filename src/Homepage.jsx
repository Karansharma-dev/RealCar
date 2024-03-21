import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/Booking'
import Plan from './components/Plan'
import Pick from './components/Pick'
import Choose from './components/Choose'

function Homepage() {
    return (
        <div className="Homepage">
            <Navbar />
            <Hero />
            <Booking />
            <Plan />
            <Pick />
            <Choose />
        </div>
    )
}

export default Homepage