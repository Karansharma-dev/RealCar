import React from 'react'
import './Choose.css'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

function Choose() {
    return (
        <div className="Banner">
            <section className="banner-section">
                <div className="banner-container">
                    <div className="banner-content">
                        <div className="banner-content__text">
                            <h2>Save big with our cheap car rental!</h2>
                            <p>Top Airports. Local Suppliers.<span> 24/7</span> Support.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose-section">
                <div className="choose-container">
                    <div className="choose-content">
                        <div className="choose-content__img">
                            <img src="/cars.png" alt="" />
                        </div>
                        <div className="text-container">
                            <div className="text-container__left">
                                <h4>Why Choose Us</h4>
                                <h2>Best valued deals you will ever find</h2>
                                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                                <a href="#home">Find Details <FaChevronRight /></a>
                            </div>
                            <div className="text-container__right">
                                <div className="text-container__right__box">
                                    <img src="/wcu-1.png" alt="" />
                                    <div className="right__box__text-container">
                                        <h4>Cross Country Drive</h4>
                                        <p>Cross Country Drive
                                            Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                                    </div>
                                </div>
                                <div className="text-container__right__box">
                                    <img src="/wcu-2.png" alt="" />
                                    <div className="right__box__text-container">
                                        <h4>All Inclusive Pricing</h4>
                                        <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                                    </div>
                                </div>
                                <div className="text-container__right__box">
                                    <img src="/wcu-2.png" alt="" />
                                    <div className="right__box__text-container">
                                        <h4>No Hidden Charges</h4>
                                        <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="testimonials-title">
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testimonials</h2>
                        <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    </div>
                    <div className="testimonals-reviews">
                        <div className="all-testimonials__box">
                            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                            <div className="all-testimonials__box__profile">
                                <img src="/mercedes.png" alt="user_img" />
                                <span><h4>Parry Hotter</h4></span>
                            </div>
                        </div>
                        <div className="all-testimonials__box">
                            <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website! "</p>
                            <div className="all-testimonials__box__profile">
                                <img src="/benz.png" alt="user_img" />
                                <span><h4>Johnny Depp</h4></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="download-section">
                    <div className="download-container">
                        <div className="download-text">
                            <h2>Download our app to get most out of it</h2><p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p><div className="download-text__btns">
                                <img alt="download_img" src="/gplay.png" />
                                <img alt="download_img" src="/appstore.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li><span>CAR</span> Rental</li>
                            <li>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
                            <li><a href="tel:123456789">
                            <IoCallSharp />   (123) -456-789</a></li>
                            <li><a href="mailto:  carrental@gmail.com"><IoMdMail />
  carrental@gmail.com</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://xpeedstudio.com/">Design by XpeedStudio</a></li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Company</li>
                            <li><a href="#home">New York</a></li>
                            <li><a href="#home">Careers</a></li>
                            <li><a href="#home">Mobile</a></li>
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">How we work</a></li>
                        </ul><ul className="footer-content__2">
                            <li>Working Hours</li><li>Mon - Fri: 9:00AM - 9:00PM</li><li>Sat: 9:00AM - 19:00PM</li>
                            <li>Sun: Closed</li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Subscription</li>
                            <li><p>Subscribe your Email address for latest news &amp; updates.</p></li>
                            <li><input type="email" placeholder="Enter Email Address" fdprocessedid="gwzav" /></li>
                            <li><button className="submit-email" fdprocessedid="y97efb">Submit</button></li>
                        </ul>
                    </div>
                </div>
                </footer>
            </section>
        </div>
    )
}

export default Choose