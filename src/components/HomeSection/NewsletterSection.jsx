import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const NewsletterSection = () => {
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
    <Newsletter>
        <section id="newsletter" data-aos="fade-up">
            <div className="container">
                <div className="newsletter__wrapper">
                    <div className="newsletter__info">
                        <h2 className="newsletter__title">
                            Join Newsletter
                        </h2>
                        <p className="newsletter__text">
                            Get notified with the latest news and recent offers from the “Shaif’s Cuisine”
                        </p>
                    </div>
                    <div className="newsletter__form">
                        <form>
                            <label htmlFor="email">
                                <input type="email" placeholder="Your Email Address" />
                            </label>
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Newsletter>
  )
}

const Newsletter = styled.div`
.newsletter__wrapper {
    display: flex;
    flex-direction: column;
    background: var(--green-2);
    padding: 1.5rem;
    border-radius: 8px;
    gap: 2rem;
}

.newsletter__title {
    font-size: 1.8rem;
    color: var(--black-1);
    font-weight: 600;
    margin-bottom: 1.3rem;
}

.newsletter__text {
    font-size: 1.4rem;
    color: var(--black-2);
    font-weight: 500;
}

.newsletter__form form {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
}

.newsletter__form label {
    width: 100%;
}

.newsletter__form input {
    width: 100%;
    font-size: 1.4rem;
    padding: 1.4rem 1rem;
    border: none;
    outline: none;
}

.newsletter__form input::placeholder {
    color: rgb(168, 166, 166);
}

.newsletter__form button[type=submit] {
    background: var(--green-1);
    color: var(--white-1);
    border: none;
    font-size: 1.4rem;
    padding: 0 2rem;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}

@media only screen and (min-width: 768px) {
    .newsletter__wrapper {
        flex-direction: row;
        padding: 5rem;
        align-items: center;
    }

    .newsletter__form,
    .newsletter__info {
        flex: 1;
    }

    .newsletter__title {
        font-size: 3.6rem;
        margin-bottom: 2rem;
    }

    .newsletter__text {
        font-size: 1.8rem;
        max-width: 400px;
    }

    .newsletter__form {
        max-width: 450px;
        border-radius: 12px;
    }

    .newsletter__form input {
        font-size: 1.8rem;
        padding: 2rem;
    }

    .newsletter__form button[type=submit] {
        font-size: 1.8rem;
        padding: 0 3rem;
    }
}
`;

export default NewsletterSection