import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
import Food1 from '../../assets/food-1.png'
import Food3 from '../../assets/food-3.png'
import Stars from '../../assets/3star.png'

const SpecialsSection = () => {

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
    <Specials>
    <section id="ourSpecials" data-aos="fade-up">
    <div class="container">
    <div class="ourSpecials__wrapper">
        <div class="ourSpecials__left">
        <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
            <img src={Food3} alt="food" />
            </div>
            <h2 class="ourSpecials__item__title">
                Sweet Potato Fries Bowl
            </h2>
            <h3 class="ourSpecials__item__price">
                $18
            </h3>
            <div class="ourSpecials__item__stars">
            <img src={Stars} alt="3 stars" />
            </div>
            <p class="ourSpecials__item__text">
            These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor.</p>
        </div>
        <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
            <img src={Food1} alt="food img" />
            </div>
            <h2 class="ourSpecials__item__title">
                Vegan Salad bowl
            </h2>
            <h3 class="ourSpecials__item__price">
                $18
            </h3>
            <div class="ourSpecials__item__stars">
            <img src={Stars} alt="stars" />
            </div>
            <p class="ourSpecials__item__text">
            Vegan salad bowl are immensely satisfying with combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing each bite is an explosion of flavors and textures.
            </p>
        </div>
        </div>
        <div class="ourSpecials__right">
        <h2 class="ourSpecials__title">
            Our Specials
        </h2>
        <p class="ourSpecials__text">
            All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
            delivered to our customers
        </p>
        <Link to="booking" class="btn primary-btn">Book Table</Link>
        </div>
    </div>
    </div>
    </section>
    </Specials>
    )
}

const Specials = styled.div`
#ourSpecials {
    padding-top: 10rem;
}

.ourSpecials__wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.ourSpecials__left {
    display: flex;
    gap: 1rem;
}

.ourSpecials__item {
    background-color: var(--lightGreen-1);
    padding: 1.2rem;
    padding-top: 5rem;
    border-radius: 12px;
    width: 45%;
    margin: 0 auto;
}

.ourSpecials__item__img {
    margin-top: calc(-50% - 2rem);
    margin-bottom: 2rem;
    border-radius: 12px !important;
    height: 150px;
    overflow: hidden !important;

    img {
        object-fit: cover;
    }
}

.ourSpecials__item__title {
    font-size: 1.4rem;
    color: var(--black-1);
    font-weight: 600;
    margin-bottom: 1rem;
}

.ourSpecials__item__price {
    color: var(--green-1);
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.ourSpecials__item__stars {
    height: 1.5rem;
    width: max-content;
    margin-bottom: 1rem;
}

.ourSpecials__item__text {
    font-size: 1.4rem;
    color: var(--black-2);
    font-weight: 500;
}

.ourSpecials__title {
    font-size: 1.8rem;
    color: var(--black-1);
    margin-bottom: 1.5rem;
}

.ourSpecials__text {
    font-size: 1.4rem;
    color: var(--black-2);
    margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
    #ourSpecials {
        padding-top: 15rem;

    }
    #ourSpecials .container {
        max-width: 900px;
    }

    .ourSpecials__wrapper {
        flex-direction: row;
    }

    .ourSpecials__right {
        flex: 2;
    }

    .ourSpecials__left {
        flex: 4;
        gap: 2rem;
    }

    .ourSpecials__item {
        padding: 2rem;
        width: 45%;
    }

    .ourSpecials__item__title {
        font-size: 2.4rem;
        line-height: 1.4em;
        margin-bottom: 1.5rem;
    }

    .ourSpecials__item__price {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .ourSpecials__item__stars {
        margin-bottom: 2rem;
    }

    .ourSpecials__item__text {
        font-size: 1.6rem;
    }

    .ourSpecials__title {
        font-size: 3.6rem;
        margin-bottom: 1.5rem;
    }

    .ourSpecials__text {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
}

@media only screen and (max-width: 300px) {
    .ourSpecials__left {
        flex-wrap: wrap;
        gap: 10rem;
    }

    .ourSpecials__item {
        width: 100%;
    }
}
`;


export default SpecialsSection