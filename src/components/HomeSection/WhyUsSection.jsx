import styled from 'styled-components'
import Icon1 from '../../assets/whyUs-icon1.svg'
import Icon2 from '../../assets/whyUs-icon2.svg'
import Icon3 from '../../assets/whyUs-icon3.svg'
import Icon4 from '../../assets/whyUs-icon4.svg'

const WhyUsSection = () => {
  return (
    <WhyUs>
    <section id='whyUs'>
        <div className="container">
            <div className="whyUs__wrapper">
                <div className="whyUs__left">
                    <h2 className="whyUs__title">
                        Why Choose Our Food
                    </h2>
                    <p className="whyUs__text">
                        Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant. Shaif's Cuisine is one of the most exquisite fine-dinning restaurant in Chittagong cities with a captivating view of GEC Hills, perfect ambiance, and scrumptious food.
                    </p>
                </div>
                <div className="whyUs__right">
                    <div className="whyUs__items__wrapper">
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon1} alt="icon" />
                            </div>
                            <p className="whyUs__item-text">
                                Quality Food
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon2} alt="icon" />
                            </div>
                            <p className="whyUs__item-text">
                                Classical taste
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon3} alt="icon" />
                            </div>
                            <p className="whyUs__item-text">
                                Skilled chef
                            </p>
                        </div>
                        <div className="whyUs__item">
                            <div className="whyUs__item-icon">
                                <img src={Icon4} alt="icon" />
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
`;

export default WhyUsSection