import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import EventCorporate from '../../assets/event-corporate.png'
import EventWedding from '../../assets/event-weedings.png'

const EventsInfoSection = () => {

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
    <EventsInfo>
        <section id="eventsInfo" data-aos="fade-up">
            <div className="container">
                <div className="eventsInfo__wrapper">
                    <div className="eventsInfo__left">
                        <div className="eventsInfo__item">
                            <div className="eventsInfo__item-img">
                                <img src={EventCorporate} alt="ecents" />
                            </div>
                            <div className="eventsInfo__item-info">
                                <h2 className="eventsInfo__item-title">
                                    Corporate Events
                                </h2>
                                <p className="eventsInfo__item-text">
                                    Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties.
                                </p>
                            </div>
                        </div>
                        <div className="eventsInfo__item">
                            <div className="eventsInfo__item-img">
                                <img src={EventWedding} alt="ecents" />
                            </div>
                            <div className="eventsInfo__item-info">
                                <h2 className="eventsInfo__item-title">
                                    Weddings
                                </h2>
                                <p className="eventsInfo__item-text">
                                    Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is sophisticated and comfortable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="eventsInfo__right">
                        <h2 className="eventsInfo__title">
                            Book For Events
                        </h2>
                        <p className="eventsInfo__text">
                            Book your private event or corporate function at Shaif's cuisine to experience a truly unique experience.
                        </p>
                        <Link to='/contact' className='btn primary-btn'>Contact Now</Link>
                    </div>
                </div>
            </div>
        </section>
    </EventsInfo>
  )
}

const EventsInfo = styled.div`
#eventsInfo {
    padding-top: 0;
}

.eventsInfo__wrapper {
    display: flex;
    flex-direction: column;
}

.eventsInfo__item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: var(--lightGreen-1);
    margin-bottom: 1.5rem;
    border-radius: 12px;
}

.eventsInfo__item-img {
    border-radius: 12px;
    overflow: hidden;
    flex: 3;
    img {
        object-fit: cover;
    }
}

.eventsInfo__item-info {
    flex: 4;
}

.eventsInfo__item-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--black-1);
}
.eventsInfo__item-text {
    font-size: 1.4rem;
    color: var(--black-2);
}

.eventsInfo__right {
    margin-top: 2rem;
}

.eventsInfo__title {
    font-size: 1.8rem;
    color: var(--black-1);
    margin-bottom: 1rem;
}

.eventsInfo__text {
    font-size: 1.4rem;
    color: var(--black-2);
    margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
.eventsInfo__wrapper {
    flex-direction: row;
    gap: 2rem;
}

.eventsInfo__left,
.eventsInfo__right {
    flex: 1;
}

.eventsInfo__item {
    padding: 2rem;
    gap: 2rem;
    max-width: 500px;
    margin-bottom: 2rem;
}

.eventsInfo__item-title {
    font-size: 1.8rem;
}

.eventsInfo__item-text {
    font-size: 1.6rem;
}

.eventsInfo__title {
    font-size: 3.6rem;
}

.eventsInfo__text {
    max-width: 450px;
    font-size: 1.8rem;
    margin-bottom: 2rem;
}
}
`;

export default EventsInfoSection