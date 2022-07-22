import styled from 'styled-components'
import Food1 from '../../../assets/food-1.png'
import Food2 from '../../../assets/food-2.png'
import Food3 from '../../../assets/food-7.png'
import Stars from '../../../assets/3star.png'

const TopDishSection = () => {
  return (
    <DishSection>
        <section id="dishGrid" data-aos="fade-up">
            <div className="container">
                <h2 className="dishGrid__title">Top Dishes</h2>
                <div className="dishGrid__wrapper">
                    <div className="dishGrid__item">
                        <div className="dishGrid__item__img">
                            <img src={Food1} alt="food" />
                        </div>
                        <div className='dishGrid__item__info'>
                            <h3 className='dishGrid__item__title'>
                                Vegan Salad bowl
                            </h3>
                            <h3 className='dishGrid__item__price'>
                                $13
                            </h3>
                            <div className='dishGrid__item__stars'>
                                <img src={Stars} alt="rattings" />
                            </div>
                        </div>
                    </div>
                    <div className="dishGrid__item">
                        <div className="dishGrid__item__img">
                            <img src={Food2} alt="food" />
                        </div>
                        <div className='dishGrid__item__info'>
                            <h3 className='dishGrid__item__title'>
                                Vegan Pesto Zoodles
                            </h3>
                            <h3 className='dishGrid__item__price'>
                                $12
                            </h3>
                            <div className='dishGrid__item__stars'>
                                <img src={Stars} alt="rattings" />
                            </div>
                        </div>
                    </div>
                    <div className="dishGrid__item">
                        <div className="dishGrid__item__img">
                            <img src={Food3} alt="food" />
                        </div>
                        <div className='dishGrid__item__info'>
                            <h3 className='dishGrid__item__title'>
                                Hot Green Bowl
                            </h3>
                            <h3 className='dishGrid__item__price'>
                                $12
                            </h3>
                            <div className='dishGrid__item__stars'>
                                <img src={Stars} alt="rattings" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DishSection>
  )
}

const DishSection = styled.div`
.dishGrid__title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: var(--black-1);
}

.dishGrid__wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(140px, 1fr));
    gap: 1rem;
}

.dishGrid__item {
    display: flex;
    flex-direction: column;
    background-color: var(--lightGreen-1);
    padding: .5rem;
    gap: .5rem;
    border-radius: 12px;
}

.dishGrid__item__img {
    flex: 4;
}

.dishGrid__item__img img {
    object-fit: cover;
    border-radius: 12px;
}

.dishGrid__item__info {
    flex: 5;
}

.dishGrid__item__title {
    font-size: 1.4rem;
    line-height: 1.3em;
    font-weight: 500;
    color: var(--black-1);
    margin-bottom: .5rem;
}

.dishGrid__item__price {
    font-size: 1.4rem;
    color: var(--green-1);
    font-weight: 500;
    margin-bottom: .5rem;
}

.dishGrid__item__stars {
    max-height: 15px;
    width: max-content;
}

@media only screen and (min-width: 768px) {
    .dishGrid__title {
        font-size: 2.4rem;
    }

    .dishGrid__wrapper {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
    }

    .dishGrid__item {
        flex-direction: row;
        padding: 1.5rem;
        gap: 1rem;
    }

    .dishGrid__item__title {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    .dishGrid__item__price {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
}

`;

export default TopDishSection