import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";

import Navbar from "../Global/NavbarSection/Navbar"
import Footer from "../Global/FooterSection/Footer"
import FooterCopyright from "../Global/FooterSection/FooterCopyright"

import ourStoryImg from '../../assets/ourStoryImg.png'
import ourGoalsImg_1 from '../../assets/ourGoals_img1.png'
import ourGoalsImg_2 from '../../assets/ourGoals_img2.png'
import ourGoalsImg_3 from '../../assets/ourGoals_img3.png'

const About = () => {
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
    <AboutSection>
      <Navbar />
      <section id="ourStory" data-aos="fade-up">
        <div className="container">
          <div className="ourStory__wrapper">
            <div className="ourStory__img">
              <img src={ourStoryImg} alt="Shaif's cuisine" />
            </div>
            <div className="ourStory__info">
              <h3 className="ourStory__title">
                Our Story
              </h3>
              <h4 className="ourStory__subtitle">
                It's all started since 1998
              </h4>
              <p className="ourStory__text">
                Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a dining experience to remember.
                <br/><br/>
                Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties, business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices,      and seating for up to 65 guests, we can cater for all occasions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Goals section */}
      <section id="ourGoals">
        <div className="container">
          <div className="ourGoals__info" data-aos="fade-down">
            <h3 className="ourGoals__title">
              Our Goals
            </h3>
            <p className="ourGoals__text">
              We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth, graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our consumers with exceptional service. To have every customer who comes through our doors leave impressed by their experience at Shaif's Cuisine and excited to come back again.
            </p>
          </div>
          <div className="ourGoals__img__wrapper" data-aos="fade-up">
            <div className="ourGoals__img1">
            <img src={ourGoalsImg_1} alt="our goals" />
            </div>
            <div className="ourGoals__img2">
            <img src={ourGoalsImg_2} alt="our goals" />
            </div>
            <div className="ourGoals__img3">
            <img src={ourGoalsImg_3} alt="our goals" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterCopyright />
    </AboutSection>
  )
}

const AboutSection = styled.div`
margin: 5rem 0;

.ourStory__wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ourStory__title,
.ourGoals__title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--black-1);
  margin-bottom: 1rem;
}

.ourStory__subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--black-1);
  margin-bottom: 2rem;
}

.ourStory__text,
.ourGoals__text {
  font-size: 1.4rem;
  line-height: 1.4em;
  color: var(--black-2);
}

/* Our goals styles */
.ourGoals__info {
  text-align: left;
  margin-bottom: 5rem;
}

.ourGoals__img__wrapper {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}

.ourGoals__img__wrapper img {
  object-fit: cover;
}

.ourGoals__img1 {
  grid-row: 1/3;
}


@media only screen and (min-width: 768px) {
.ourStory__wrapper {
  flex-direction: row;
  gap: 3rem;
}

.ourStory__img,
.ourStory__info {
  flex: 1;
}

.ourStory__title,
.ourGoals__title {
  font-size: 3.6rem;
}

.ourStory__subtitle {
  font-size: 1.8rem;
}

.ourStory__text,
.ourGoals__text {
  font-size: 1.8rem;
  max-width: 800px;
}

/* Our goals styles */
.ourGoals__info {
  text-align: center;
}

.ourGoals__text {
  margin: 0 auto;
}

.ourGoals__img__wrapper {
  gap: 2rem;
}

}
`;

export default About