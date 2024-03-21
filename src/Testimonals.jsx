import React from 'react'
import Navbar from './components/Navbar'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Testimonals() {
    return (
        <div className="TestimonalsPage">
            <Navbar />
            <div className="testimonials" style={{padding:"150px 0"}}>
                <div className="testimonials-title">
                    <h4>Reviewed by People</h4>
                    <h2>Client's Testimonials</h2>
                    <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
                <div className="testimonals-reviews">
                    <div className="all-testimonials__box">
                        <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                        <div className="all-testimonials__box__profile">
                            <img src="/apparel2.jpg" alt="user_img" />
                            <span><h4>Kevin</h4></span>
                        </div>
                    </div>
                    <div className="all-testimonials__box">
                        <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website! "</p>
                        <div className="all-testimonials__box__profile">
                            <img src="/apparel3.jpg" alt="user_img" />
                            <span><h4>Rust</h4></span>
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
        </div>
    )
}

export default Testimonals