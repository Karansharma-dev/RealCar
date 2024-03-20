import React from 'react'
import './Booking.css'

function Booking() {
  return (
    <section className='Booking'>
      <div className="Booking-container">
        <div className="Booking-container__box">
          <h2>Book a Car</h2>
          <form className="box-form">
            <div className="box-form__car-type">
              <label htmlFor="">Select Your Car <b>*</b></label>
              <select fdprocessedid="re4kq"><option>Select your car type</option><option value="Audi A1 S-Line">Audi A1 S-Line</option><option value="VW Golf 6">VW Golf 6</option><option value="Toyota Camry">Toyota Camry</option><option value="BMW 320 ModernLine">BMW 320 ModernLine</option><option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option><option value="VW Passat CC">VW Passat CC</option></select>
            </div>
            <div className="box-form__car-type">
              <label htmlFor="">Pick-up <b>*</b></label>
              <select fdprocessedid="667d7f"><option>Select pick up location</option><option>Belgrade</option><option>Novi Sad</option><option>Nis</option><option>Kragujevac</option><option>Subotica</option></select>
            </div>
            <div className="box-form__car-type">
              <label htmlFor="">Drop-of <b>*</b></label>
              <select fdprocessedid="yp5rvg"><option>Select drop off location</option><option>Novi Sad</option><option>Belgrade</option><option>Nis</option><option>Kragujevac</option><option>Subotica</option></select>
            </div>
            <div className="box-form__car-time">
              <label htmlFor="">Pick-up <b>*</b></label>
              <input id="picktime" type="date" value=""/>
            </div>
            <div className="box-form__car-time">
              <label htmlFor="">Drop-of <b>*</b></label>
              <input id="picktime" type="date" value=""/>
            </div>
          <button className='Booking-search__btn'>Search</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking