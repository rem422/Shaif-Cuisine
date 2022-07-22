import styled from 'styled-components'
import HeroImg from '../../assets/heroImg.png'
// Components
import Navbar from '../Navbar/Navbar'
import StoreInfo from '../StoreInfo/StoreInfo'
import Specials from './SpecialsSection'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <HomeSection>
      <Navbar />
      <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__left" data-aos="fade-left">
                <div className="hero__left-wrapper">
                  <h1 className="hero__heading">The flavor of tradition</h1>
                  <p className="hero__info">We are a multi-cuisin restaurant offering a wide variety of food experience in both casual and fine dining environment.</p>
                  <div className="button__wrapper">
                    <button className="btn primary-btn">Explore Menu</button>
                    <button className="btn">Book Table</button>
                  </div>
                </div>
              </div>
              <div className="hero__right" data-aos="fade-right">
                <div className="hero__img-wrapper">
                  <img src={HeroImg} alt="food-img" />
                </div>
              </div>
            </div>
          </div>
          <StoreInfo />
          <Specials />
      </section>
      <Footer />
    </HomeSection>
  )
}


const HomeSection = styled.div`
  margin: 5rem 0;

  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 5rem;

    .hero__left-wrapper {
      max-width: 360px;

      .hero__heading {
        font-family: var(--font-poppins);
        font-weight: 600;
        line-height: 1.4rem;
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: var(--black-1);
      }

      .hero__info {
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: var(--black-2);
      }

      .button__wrapper {
        text-align: center;

        /* button::nth-child(1) {
          margin-right: 1rem;
        } */
      }
    }

    .hero__img-wrapper {
      max-width: 400px;
      width: 80%;
      margin: 0 auto;
    }
  }

@media only screen and (min-width:768px) {
  .hero__wrapper {
    flex-direction: row;
    gap: 0;

    .hero__left {
      flex: 3;

      .hero__heading {
        font-size: 3.6rem;
        margin-bottom: 2rem;
        text-align: left;
        line-height: 3.5rem;
      }

      .hero__info {
        margin-bottom: 2rem;
        text-align: left;
        font-size: 1.8rem;
      }

      .button__wrapper {
        text-align: left;
      }
    }

    .hero__right {
      flex: 4;
      
      .hero__img-wrapper {
        max-width: none;
        width: 90%;
      }
    }
  }
}

`;

export default Home