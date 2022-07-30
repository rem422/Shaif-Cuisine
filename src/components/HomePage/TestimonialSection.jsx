import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

import Testimonial_Img1 from '../../assets/testimonial_img1.png'
import Testimonial_Img2 from '../../assets/testimonial_img2.jpg'
import Testimonial_Img3 from '../../assets/testimonial_img3.jpg'
import Testimonial_Img4 from '../../assets/testimonial_img4.jpg'
import Stars from '../../assets/3star.png'

const TestimonialSection = () => {
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
    <Testimonials>
        <section id='testimonial'>
            <div className="container">
                <div className="testimonial__wrapper" data-aos="fade-up">
                    <h2 className="testimonial__title">
                        What  Our Customers Say
                    </h2>
                    <div className="testimonial__items__wrapper">
                        <div className="testimonial__item">
                            <div className="testimonial__item-img">
                                <img src={Testimonial_Img1} alt="Testimonial" />
                            </div>
                            <div className="testimonial__item-info">
                                <h3 className="testimonial__item-name">
                                    Sayed Ahmed
                                </h3>
                                <div className="testimonial__item-stars">
                                    <img src={Stars} alt="rattings" />
                                </div>
                                <p className="testimonial__item-text">
                                    “Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again”
                                </p>
                            </div>
                        </div>
                        <div className="testimonial__item">
                            <div className="testimonial__item-img">
                                <img src={Testimonial_Img2} alt="Testimonial" />
                            </div>
                            <div className="testimonial__item-info">
                                <h3 className="testimonial__item-name">
                                    Arfan
                                </h3>
                                <div className="testimonial__item-stars">
                                    <img src={Stars} alt="rattings" />
                                </div>
                                <p className="testimonial__item-text">
                                    "from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world"
                                </p>
                            </div>
                        </div>
                        <div className="testimonial__item">
                            <div className="testimonial__item-img">
                                <img src={Testimonial_Img3} alt="Testimonial" />
                            </div>
                            <div className="testimonial__item-info">
                                <h3 className="testimonial__item-name">
                                    Fahim & Nishat
                                </h3>
                                <div className="testimonial__item-stars">
                                    <img src={Stars} alt="rattings" />
                                </div>
                                <p className="testimonial__item-text">
                                    “A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping hot- just the way we love it . Would definitely recommend. We have been repeatedly and it's consistently exceeded our expectations"
                                </p>
                            </div>
                        </div>
                        <div className="testimonial__item">
                            <div className="testimonial__item-img">
                                <img src={Testimonial_Img4} alt="Testimonial" />
                            </div>
                            <div className="testimonial__item-info">
                                <h3 className="testimonial__item-name">
                                    Hussain
                                </h3>
                                <div className="testimonial__item-stars">
                                    <img src={Stars} alt="rattings" />
                                </div>
                                <p className="testimonial__item-text">
                                    “I would just like to say thank you for the excellent service we received in your restaurant last night. Although the place was very busy we still had an excellent time and really appreciated the live entertainment too!“
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Testimonials>
  )
}

const Testimonials = styled.div`
    .testimonial__wrapper {
        max-width: 400px;
        margin: 0 auto;
    }

    .testimonial__title {
        font-size: 1.8rem;
        color: var(--black-1);
        margin-bottom: 3rem;
        text-align: center;
        text-transform: capitalize;
    }

    .testimonial__items__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .testimonial__item {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        background: var(--lightGreen-1);
        border-radius: 12px;
    }

    .testimonial__item-img {
        flex: 2;
        border-radius: 12px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        img {
            object-fit: cover;
        }
    }

    .testimonial__item-info {
        flex: 4;
    }

    .testimonial__item-name {
        font-size: 1.4rem;
        font-family: var(--font-poppins);
        margin-bottom: 1rem;
        color: var(--black-1);
    }
    .testimonial__item-stars {
        max-height: 15px;
        width: max-content;
        margin-bottom: 1.5rem;
    }

    .testimonial__item-text {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 768px) {
        .testimonial__wrapper {
            max-width: 900px;
        }

        .testimonial__title {
            font-size: 3.6rem;
            margin-bottom: 5rem;
        }
        
        .testimonial__items__wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        .testimonial__item {
            padding: 2rem;
        }

        .testimonial__item-name {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .testimonial__item-stars {
            margin-bottom: 2rem;
        }

        .testimonial__item-text {
            font-size: 1.6rem;
            line-height: 1.4em;
        }
    }

@media only screen and (max-width: 350px) {
    .testimonial__item {
        flex-direction: column;
    }

    .testimonial__item-img,
    .testimonial__item-info {
        flex: auto;
    }
}
`;

export default TestimonialSection