import React from 'react'
import Navbar from './components/Navbar'
import { IoCallSharp } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'

function AboutPage() {
  return (
    <div className="AboutPage">
        <Navbar/>
        <div className="about-section">
            <div className="about-container">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <ul>
                <li><img src="/about1.png" alt="" /></li>
                <li><img src="/about2.png" alt="" /></li>
                <li><img src="/about3.png" alt="" /></li>
            </ul>
            </div>
        </div>

{/* --------------- */}
        <div className="Plan-container">
        <div className="Plan-container__title">
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
        </div>
        <div className="Plan-container__boxes">
          <div className="Plan-container__boxes__box">
            <img src="/pyt-1.png" alt="" />
            <h3>Select Car</h3>
            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          </div>
          <div className="Plan-container__boxes__box">
            <img src="/pyt-2.png" alt="" />
            <h3>Contact Operator</h3>
            <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
          </div>
          <div className="Plan-container__boxes__box">
            <img src="/pyt-3.png" alt="" />
            <h3>Let's Drive</h3>
            <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
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

export default AboutPage