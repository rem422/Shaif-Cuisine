import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";


import Navbar from "../Global/NavbarSection/Navbar"
import Footer from "../Global/FooterSection/Footer"
import FooterCopyright from "../Global/FooterSection/FooterCopyright"

const Booking = () => {
useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom'
      });
    AOS.refresh();
  }, []);

  return (
    <BookingPage>
      <Navbar />
      <section id="form">
      <div className="container">
        <h3 className="form__title">
          Book Table
        </h3>
          <div className="form__wrapper">
                <form>
                  <div className="form__group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="first_name" required/>
                  </div>
                  <div className="form__group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="last_name" required/>
                  </div>
                  <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                  </div>
                  <div class="form__group">
                  <label for="tableType">Table Type</label>
                  <select name="Table Type" id="tableType" required>
                    <option selected disabled>Choose</option>
                    <option value="small">Small(2 persons)</option>
                    <option value="medium">Small(4 persons)</option>
                    <option value="large">large(6 persons)</option>
                  </select>
                </div>
                <div className="form__group">
                    <label htmlFor="guestNumber">Guest Number</label>
                    <input type="number" id="guestNumber" name="guestNumber" min="1" max="10" required/>
                </div>
                  <div class="form__group">
                  <label for="placement">Placement</label>
                  <select name="Placement" id="placement">
                    <option selected disabled>Choose</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="indoor">Indoor</option>
                    <option value="rooftop">rooftop</option>
                  </select>
                  </div>
                  <div className="form__group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" required/>
                  </div>
                  <div className="form__group">
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" name="time" required/>
                  </div>
                  <div className="form__group form__group__full">
                    <label htmlFor="note">Note</label>
                    <textarea name="note" id="note" cols="30" rows="10" required></textarea>
                  </div>
                  <button type="submit" className="primary-btn">Send</button>
                </form>
              </div>
      </div>
      </section>
      <Footer />
      <FooterCopyright />
    </BookingPage>
  )
}

const BookingPage = styled.div`
margin: 5rem 0;
`;

export default Booking