import React, { useState } from 'react'
import './Pick.css'

function Pick() {

    const carDetails = [{
        image: '/benz.png',
        rentPrice: 35,
        model: 'Benz',
        mark: 'A1',
        year: 2012,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Gasoline'
    }, {
        image: '/lamborghini-urus.png',
        model: 'Lamborghini',
        rentPrice: 55,
        mark: 'A1',
        year: 2017,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Automatic',
        fuel: 'Gasoline'
    }, {
        image: '/mercedes.png',
        model: 'Mercedes',
        rentPrice: 40,
        mark: 'A1',
        year: 2010,
        doors: '4/5',
        ac: 'No',
        transmission: 'Manual',
        fuel: 'Gasoline'
    }, {
        image: '/bmw.png',
        model: 'BMW',
        rentPrice: 45,
        mark: 'A1',
        year: 2015,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Automatic',
        fuel: 'Gasoline'
    }, {
        image: '/mercedes-black.png',
        model: 'Mercedes Black',
        rentPrice: 35,
        mark: 'A1',
        year: 2016,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel'
    },]

    const [carImage, setcarImage] = useState('/benz.png')
    const [carModel, setcarModel] = useState('Benz')
    const [carMark, setcarMark] = useState('A1')
    const [carYear, setcarYear] = useState(2012)
    const [carDoors, setcarDoors] = useState('4/5')
    const [carAc, setcarAc] = useState('Yes')
    const [carTransmission, setcarTransmission] = useState('Manual')
    const [carFuel, setcarFuel] = useState('Gasoline')
    const [rentPrice, setrentPrice] = useState(35)


    const Button1 = () => {
        setcarImage(carDetails[0].image)
        setcarModel(carDetails[0].model)
        setcarMark(carDetails[0].mark)
        setcarYear(carDetails[0].year)
        setcarDoors(carDetails[0].doors)
        setcarAc(carDetails[0].ac)
        setcarTransmission(carDetails[0].transmission)
        setcarFuel(carDetails[0].fuel)
        setrentPrice(carDetails[0].rentPrice)
    }
    const Button2 = () => {
        setcarImage(carDetails[1].image)
        setcarModel(carDetails[1].model)
        setcarMark(carDetails[1].mark)
        setcarYear(carDetails[1].year)
        setcarDoors(carDetails[1].doors)
        setcarAc(carDetails[1].ac)
        setcarTransmission(carDetails[1].transmission)
        setcarFuel(carDetails[1].fuel)
        setrentPrice(carDetails[1].rentPrice)
    }
    const Button3 = () => {
        setcarImage(carDetails[2].image)
        setcarModel(carDetails[2].model)
        setcarMark(carDetails[2].mark)
        setcarYear(carDetails[2].year)
        setcarDoors(carDetails[2].doors)
        setcarAc(carDetails[2].ac)
        setcarTransmission(carDetails[2].transmission)
        setcarFuel(carDetails[2].fuel)
        setrentPrice(carDetails[2].rentPrice)
    }
    const Button4 = () => {
        setcarImage(carDetails[3].image)
        setcarModel(carDetails[3].model)
        setcarMark(carDetails[3].mark)
        setcarYear(carDetails[3].year)
        setcarDoors(carDetails[3].doors)
        setcarAc(carDetails[3].ac)
        setcarTransmission(carDetails[3].transmission)
        setcarFuel(carDetails[3].fuel)
        setrentPrice(carDetails[3].rentPrice)
    }

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
                            <button className='coloured-button' id='btn1' onClick={Button1}>Mercedes-Benz</button>
                            <button id='btn2' onClick={Button2}>Lamborghini Urus</button>
                            <button id='btn3' onClick={Button3}>Mercedes-Benz GLK</button>
                            <button id='btn4' onClick={Button4}>BMW 320 ModernLine</button>
                        </div>
                        <div className="box-cars">
                            <div className="pick-car">
                                <img src={carImage} alt="" />
                            </div>
                            <div className="pick-description">

                                <div class="pick-description__price">
                                    <span>${rentPrice}</span>/ rent per day
                                </div>
                                <div class="pick-description__table">
                                    <div class="pick-description__table__col">
                                        <span>Model</span>
                                        <span>{carModel}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>Mark</span>
                                        <span>{carMark}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>Year</span>
                                        <span>{carYear}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>Doors</span>
                                        <span>{carDoors}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>AC</span>
                                        <span>{carAc}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>Transmission</span>
                                        <span>{carTransmission}</span>
                                    </div>
                                    <div class="pick-description__table__col">
                                        <span>Fuel</span>
                                        <span>{carFuel}</span>
                                    </div>
                                </div>
                                <a class="cta-btn" href="#booking-section">Reserve Now
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Pick
