import React from 'react'
import './Plan.css'

function Plan() {
  return (
    <section className="Plan">
      <div className="Plan-container">
        <div className="Plan-container__title">
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
        </div>
        <div className="Plan-container__boxes">
          <div className="Plan-container__boxes__box">
            <img src="/src/assets/pyt-1.png" alt="" />
            <h3>Select Car</h3>
            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          </div>
          <div className="Plan-container__boxes__box">
            <img src="/src/assets/pyt-2.png" alt="" />
            <h3>Contact Operator</h3>
            <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
          </div>
          <div className="Plan-container__boxes__box">
            <img src="/src/assets/pyt-3.png" alt="" />
            <h3>Let's Drive</h3>
            <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan