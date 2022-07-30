
import styled from 'styled-components'

// sub components
import Navbar from "../Global/NavbarSection/Navbar"
import Footer from "../Global/FooterSection/Footer"
import FooterCopyright from "../Global/FooterSection/FooterCopyright"
import {Breakfast, Lunch, Dinner, Specials} from './index'
import TopDishSection from '../Global/TopDishSection/TopDishSection'


const Menu = () => {
  return (
      <MenuSection>
      <Navbar />
      <section id="page__title">
        <div className="container">
          <h2 className="page__title-text">
            Explore Our Menu
          </h2>
          <Specials />
          <TopDishSection />
          <Breakfast />
          <Lunch />
          <Dinner />
        </div>
      </section>
      <Footer />
      <FooterCopyright />
      </MenuSection>
  )
}

const MenuSection = styled.div`
margin: 5rem 0;

#page__title {
	padding-top: 3rem;
	padding-bottom: 2rem;
}

.page__title-text {
	font-size: 2.2rem;
	color: var(--black-1);
}

@media only screen and (min-width: 768px) {
  #page__title {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }

  .page__title-text {
    font-size: 3.6rem;
  }
}
`;

export default Menu