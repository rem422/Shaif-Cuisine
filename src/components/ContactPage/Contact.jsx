import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";

import Navbar from "../Global/NavbarSection/Navbar"
import Footer from "../Global/FooterSection/Footer"
import FooterCopyright from "../Global/FooterSection/FooterCopyright"
import StoreInfo from "../Global/StoreInfo/StoreInfo"

const Contact = () => {
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
    <ContactPage>
      <Navbar />
        <StoreInfo data-aos="fade-down"/>
        {/* contact form section */}
        <section id="form" data-aos="fade-up">
          <div className="container">
            <h3 className="form__title">
              Contact & Inquiry
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
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required/>
                  </div>
                  <div className="form__group form__group__full">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                  </div>
                  <button type="submit" className="primary-btn">Send</button>
                  
                </form>
              </div>
          </div>
        </section>
      <Footer />
      <FooterCopyright />
    </ContactPage>
  )
}

const ContactPage = styled.div`
margin: 5rem 0;

/*  */

`;

export default Contact