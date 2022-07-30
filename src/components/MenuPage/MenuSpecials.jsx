import React, { useEffect } from "react";
import styled from 'styled-components'
import AOS from "aos";

import Food1 from '../../assets/food-3.png'
import Food2 from '../../assets/food-1.png'
import Stars from '../../assets/3star.png'

const MenuSpecials = () => {
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
        <section id="ourSpecials">
            <div className="container">
                <h3 className="ourSpecials__title">
                    Our Specials
                </h3>

                <div className="ourSpecials__wrapper">
                    <div className="ourSpecials__item">
                        <div className="ourSpecials__item-img">
                            <img src={Food1} alt="food" />
                        </div>
                        <div className="ourSpecials__item-info">
                            <h3 className="ourSpecials__item-title">
                                Sweet Potato Fries Bowl
                            </h3>
                            <h4 className="ourSpecials__item-price">
                                $12
                            </h4>
                            <div className="ourSpecials__item-stars">
                                <img src={Stars} alt="rate" />
                            </div>
                        </div>
                    </div>
                    <div className="ourSpecials__item">
                        <div className="ourSpecials__item-img">
                            <img src={Food2} alt="food" />
                        </div>
                        <div className="ourSpecials__item-info">
                            <h3 className="ourSpecials__item-title">
                                Vegan Salad bowl
                            </h3>
                            <h4 className="ourSpecials__item-price">
                                $12
                            </h4>
                            <div className="ourSpecials__item-stars">
                                <img src={Stars} alt="rate" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Specials>
  )
}

const Specials = styled.div`
#ourSpecials {
    padding: 0;
}

.ourSpecials__title {
    font-size: 1.8rem;
    color: var(--black-1);
    margin-bottom: 2rem;
}

.ourSpecials__wrapper {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    max-width: 400px;
}

.ourSpecials__item {
    flex: 1;
    display: flex;
    gap: 2rem;
    background: var(--lightGreen-1);
    padding: 1.5rem;
    border-radius: 12px;
}

.ourSpecials__item-img,
.ourSpecials__item-info {
    flex: 1;
}

.ourSpecials__item-img {
    border-radius: 12px;
    overflow: hidden;
    img {
        object-fit: cover;
    }
}

.ourSpecials__item-title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--black-1);
    line-height: 1.2em;
}

.ourSpecials__item-price {
    font-size: 1.8rem;
    color: var(--green-1);
    font-weight: 600;
    margin-bottom: 1rem;
}

.ourSpecials__item-stars {
    width: max-content;
}

@media only screen and (min-width: 768px) {
    .ourSpecials__title{
        font-size: 2.4rem;
    }

    .ourSpecials__wrapper {
        flex-direction: row;
        gap: 2rem;
        max-width: none;
    }

    .ourSpecials__item {
		padding: 3rem;
		gap: 2rem;
	}

	.ourSpecials__item__title {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.ourSpecials__item__price {
		font-size: 2.4rem;
		margin-bottom: 1.5rem;
	}
}

@media only screen and (min-width: 1100px) {
	.ourSpecials__item__img {
		flex: 4;
	}
	.ourSpecials__item__info {
		flex: 3;
	}
}
`;

export default MenuSpecials