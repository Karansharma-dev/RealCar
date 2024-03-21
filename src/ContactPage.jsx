import React from 'react'
import Navbar from './components/Navbar'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import './App.css'

function ContactPage() {
    return (
        <div className="ContactPage">
            <Navbar />

            <div className="contact-section">
                <div className="contact-section__left">
                    <h2>Need additional information?</h2>
                    <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <ul>
                        <li><a href="tel:123456789">
                            <IoCallSharp />   (123) -456-789</a></li>
                        <li><a href="mailto:  carrental@gmail.com"><IoMdMail />
                            carrental@gmail.com</a></li>
                    </ul>
                </div>
                <div className="contact-section__right">
                <form>
                    <label>Full Name <b>*</b></label>
                    <input type="text" placeholder="E.g: &quot;Joe Shmoe&quot;" fdprocessedid="f5xiks"/>
                        <label>Email <b>*</b></label>
                        <input type="email" placeholder="youremail@example.com" fdprocessedid="2msay"/>
                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder="Write Here.."></textarea>
                        <button type="submit" fdprocessedid="vecaxv">&nbsp; Send Message</button>
                </form>
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

export default ContactPage