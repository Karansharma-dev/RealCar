import React from 'react'
import './Pick.css'

function Pick() {
    return (
        <section className="pick-section">
            <div className="container">
                <div className="pick-container">
                    <div className="pick-container__title">
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className="pick-container__content">
                        <div className="pick-box">
                            <button className='coloured-button' id='btn1'>Audi A1 S-Line</button>
                            <button id='btn2'>VW Golf 6</button>
                            <button id='btn3'>Toyota Camry</button>
                            <button id='btn4'>BMW 320 ModernLine</button>
                            <button id='btn5'>Mercedes-Benz GLK</button>
                        </div>
                        <div className="box-cars">
                            <div className="pick-car">
                                <img src="/src/assets/benz.png" alt="" />
                            </div>
                            <div className="pick-description">

                                <div class="pick-description__price">
                                    <span>$45</span>/ rent per day
                                </div>
                                <div class="pick-description__table">
                                    <div class="pick-description__table__col">
                                        <span>Model</span><span>Audi</span>
                                    </div>
                                    <div class="pick-description__table__col"><span>Mark</span><span>A1</span></div><div class="pick-description__table__col"><span>Year</span><span>2012</span></div><div class="pick-description__table__col"><span>Doors</span><span>4/5</span></div><div class="pick-description__table__col"><span>AC</span><span>Yes</span></div><div class="pick-description__table__col"><span>Transmission</span><span>Manual</span></div><div class="pick-description__table__col"><span>Fuel</span><span>Gasoline</span></div></div><a class="cta-btn" href="#booking-section">Reserve Now</a></div>
                          
                    </div>
                </div>
            </div>
        </div>
        </section >
    )
}

export default Pick
