import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import EventMedia1 from '../../assets/eventsMedia1.png'
import PlayIcon from '../../assets/playIcon.svg'
import EventMedia2 from '../../assets/eventsMedia2.png'

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
    <EventsMedia>
      <section className="eventsMedia" data-aos="fade-up">
        <div className="container">
          <div className="eventsMedia__wrapper">
            <div className="eventsMedia__1">
              <img src={EventMedia1} alt="events" />
              <Link to="/" className='eventsMedia__1__playButton'>
                <img src={PlayIcon} alt="Play button" />
              </Link>
            </div>
            <div className="eventsMedia__2">
              <img src={EventMedia2} alt="events" />
            </div>
          </div>
        </div>
      </section>
    </EventsMedia>
  )
}

const EventsMedia = styled.div`
  .eventsMedia__wrapper {
    display: flex;
    gap: 1rem;
  }

  .eventsMedia__1 {
    position: relative;
  }

  .eventsMedia__1__playButton {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 50px;
  }

  @media only screen and (min-width: 768px) {
    .eventsMedia__wrapper {
      gap: 2rem;
    }

    .eventsMedia__1__playButton {
      max-width: 100px;
    }
  }
`;

export default EventsInfoSection