import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import HeroImg from '../../assets/heroImg.png'
// Components
import Navbar from "../Global/NavbarSection/Navbar"
import Footer from "../Global/FooterSection/Footer"
import FooterCopyright from "../Global/FooterSection/FooterCopyright"
import {Specials, EventsMedia, EventsInfo, WhyUs, Testimonial, Newsletter } from './index'
import StoreInfoSection from '../Global/StoreInfo/StoreInfo'
import DishesSection from '../Global/TopDishSection/TopDishSection'
import DiscountSection from '../Global/DiscountSection/DiscountSection'

const Home = () => {

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
    <HomeSection>
      <Navbar />
      <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__left" data-aos="fade-left">
                <div className="hero__left-wrapper">
                  <h1 className="hero__heading">The flavor of tradition</h1>
                  <p className="hero__info">We are a multi-cuisin restaurant offering a wide variety of food experience in both casual and fine dining environment.</p>
                  <div className="button__wrapper">
                    <Link to="/" className="primary-btn">Explore Menu</Link>
                    <Link to="booking" className="btn">Book Table</Link>
                  </div>
                </div>
              </div>
              <div className="hero__right" data-aos="fade-right">
                <div className="hero__img-wrapper">
                  <img src={HeroImg} alt="food-img" />
                </div>
              </div>
            </div>
          </div>
          <StoreInfoSection />
          <Specials />
          <DishesSection />
          <DiscountSection />
          <EventsMedia />
          <EventsInfo />
          <WhyUs />
          <Testimonial />
          <Newsletter />
      </section>
      <Footer />
      <FooterCopyright />
    </HomeSection>
  )
}


const HomeSection = styled.div`
  margin: 5rem 0;

  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 5rem;
    }

    .hero__left-wrapper {
      max-width: 360px;
    }

      .hero__heading {
        font-family: var(--font-poppins);
        font-weight: 600;
        line-height: 1.8em;
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: var(--black-1);
      }

      .hero__info {
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: var(--black-2);
      }

      .button__wrapper {
        text-align: center;
        padding: 0 1rem;
        
        a:nth-child(2) {
          margin-left: 1rem;
        }
      }

    .hero__img-wrapper {
      max-width: 400px;
      width: 80%;
      margin: 0 auto;
    }


@media only screen and (min-width:768px) {
  .hero__wrapper {
    flex-direction: row;
    gap: 0;

    .hero__left {
      flex: 3;

      .hero__heading {
        font-size: 3.6rem;
        margin-bottom: 2rem;
        text-align: left;
        line-height: 3.5rem;
      }

      .hero__info {
        margin-bottom: 2rem;
        text-align: left;
        font-size: 1.8rem;
      }

      .button__wrapper {
        text-align: left;
        padding: 0;
      }
    }

    .hero__right {
      flex: 4;
      
      .hero__img-wrapper {
        max-width: none;
        width: 90%;
      }
    }
  }
}

`;

export default Home