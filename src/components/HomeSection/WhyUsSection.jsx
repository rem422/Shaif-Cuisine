import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
import Icon1 from '../../assets/whyUs-icon1.svg'
import Icon2 from '../../assets/whyUs-icon2.svg'
import Icon3 from '../../assets/whyUs-icon3.svg'
import Icon4 from '../../assets/whyUs-icon4.svg'

const WhyUsSection = () => {
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
    <WhyUs>
    <section id='whyUs'>
        <div className="container">
            <div className="whyUs__wrapper">
                <div className="whyUs__left" data-aos="fade-right">
                    <h2 className="whyUs__title">
                        Why Choose Our Food
                    </h2>
                    <p className="whyUs__text">
                        Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant. Shaif's Cuisine is one of the most exquisite fine-dinning restaurant in Chittagong cities with a captivating view of GEC Hills, perfect ambiance, and scrumptious food.
                    </p>
                </div>
                <div className="whyUs__right" data-aos="fade-left">
                    <div className="whyUs__items__wrapper">
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon1} alt="Quality Food" />
                            </div>
                            <p className="whyUs__item-text">
                                Quality food
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon2} alt="Classical taste" />
                            </div>
                            <p className="whyUs__item-text">
                                Classical taste
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon3} alt="Skilled chef" />
                            </div>
                            <p className="whyUs__item-text">
                                Skilled chef
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon4} alt="Best service" />
                            </div>
                            <p className="whyUs__item-text">
                                Best service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </WhyUs>
  )
}

const WhyUs = styled.div`
.whyUs__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
}

.whyUs__left {
    text-align: center;
}

.whyUs__title {
    font-family: var(--font-poppins);
    font-size: 1.8rem;
    color: var(--black-1);
    font-weight: 500;
    margin-bottom: 1rem;
}

.whyUs__text {
    font-size: 1.4rem;
}

.whyUs__items__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.whyUs__item {
    background: var(--lightGreen-1);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
}

.whyUs__item-icon {
    max-width: 56px;
    margin: 0 auto;
    margin-bottom: 1rem;
}

.whyUs__item-text {
    font-family: var(--font-poppins);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--black-1);
}

@media only screen and (min-width: 768px) {
    .whyUs__wrapper {
        flex-direction: row;
        max-width: 900px;
        margin: 0 auto;
    }

    .whyUs__left {
        flex: 4;
        text-align: left;
    }

    .whyUs__right {
        flex: 3;
    }

.whyUs__title {
    font-size: 3.6rem;
    margin-bottom: 2rem;
}

.whyUs__text {
    font-size: 1.8rem;
    line-height: 1.4em;
}

.whyUs__items__wrapper {
    gap: 1.5rem;
}

.whyUs__item {
    padding: 2rem;
}

.whyUs__item-icon {
    max-width: 65px;
    margin-bottom: 1.5rem;
}

.whyUs__item-text {
    font-size: 1.8rem;
}

}

`;

export default WhyUsSection