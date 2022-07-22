import styled from 'styled-components'
import Clock from '../../../assets/wall-clock-icon.svg'
import Address from '../../../assets/address-icon.svg'
import Phone from '../../../assets/phone-icon.svg'

const StoreInfo = () => {
  return (
    <Store>
        <section id="storeInfo">
            <div className="container">
                <div className="storeInfo__wrapper" data-aos="fade-up">
                    <div className="storeInfo__item">
                        <div className="storeInfo__icon">
                            <img src={Clock} alt="icon" />
                        </div>
                        <h3 className="storeInfo__title">
                            10AM - 7PM
                        </h3>
                        <p className="storeInfo__text">
                            Opening Hours
                        </p>
                    </div>
                    <div className="storeInfo__item">
                        <div className="storeInfo__icon">
                            <img src={Address} alt="icon" />
                        </div>
                        <h3 className="storeInfo__title">
                            GEC, Chittagong
                        </h3>
                        <p className="storeInfo__text">
                            Address
                        </p>
                    </div>
                    <div className="storeInfo__item">
                        <div className="storeInfo__icon">
                            <img src={Phone} alt="icon" />
                        </div>
                        <h3 className="storeInfo__title">
                            +880123443
                        </h3>
                        <p className="storeInfo__text">
                            Call Now
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Store>
  )
}

const Store = styled.div`
.storeInfo__wrapper {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    .storeInfo__item {
        background-color: var(--lightGreen-1);
        padding: 20px 30px;
        text-align: center;
        border-radius: 12px;
        width: 150px;

        .storeInfo__icon {
            width: 30px;
            margin: 0 auto;
            margin-bottom: 1.5rem;
        }

        .storeInfo__title {
            font-size: 1.4rem;
            font-family: var(--font-poppins);
            font-weight: 500;
            margin-bottom: .5rem;
            color: var(--black-1);
        }

        .storeInfo__text {
            font-size: 1.4rem;
            font-family: var(--font-raleway);
            color: var(--black-2);
        }
    }
}

@media only screen and (min-width: 768px) {
    .storeInfo__wrapper {
        gap: 2rem;

    .storeInfo__item {
        min-width: 200px;
        padding: 40px 0;

    .storeInfo__icon {
        width: 47px;
        margin-bottom: 2.5rem;
    }

    .storeInfo__title {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .storeInfo__text {
        font-size: 1.6rem;
    }
    }
    }
}
`;

export default StoreInfo