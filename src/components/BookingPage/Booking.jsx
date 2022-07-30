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
                  <div className="form__group">
                    <label htmlFor="tableType">Table Type</label>
                    <select name="table_type" id="tableType">
                      <option selected disabled>Choose</option>
                      <option value="small">Small (2 person)</option>
                      <option value="medium">Medium (4 person)</option>
                      <option value="large">Large (6 person)</option>
                    </select>
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