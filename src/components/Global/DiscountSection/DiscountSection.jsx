import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Food5 from '../../../assets/food-5.png'
import Food4 from '../../../assets/food-4.png'
import Food3 from '../../../assets/food-3.png'
import Stars from '../../../assets/3star.png'
import DiscountIllustration from '../../../assets/discount-illustration.png'

const DiscountSection = () => {
  return (
    <Discount>
        <section id="discount" data-aos="fade-up">
            <div className="container">
                <div className="discount__wrapper">
                  <div className="discount__images">
                    <div className="discount__img1">
                      <img src={Food5} alt="food" />
                    </div>
                    <div className="discount__img2">
                      <img src={Food4} alt="food" />
                    </div>
                    <div className="discount__img3">
                      <img src={Food3} alt="food" />
                    </div>
                  </div>
                  <div className="discount__info">
                    <h3 className="discount__text">20% OFF</h3>
                    <h3 className="discount__title">
                      Demo Dish For Discount
                    </h3>
                    <h3 className="discount__price">
                      <span className="discount__oldPrice">$45</span>
                      <span className="discount__newPrice">$35</span>
                    </h3>
                    <div className="discount__stars">
                      <img src={Stars} alt="rattings" />
                    </div>
                    <Link to="booking" className='btn primary-btn'>
                      Book Table
                    </Link>
                  </div>
                </div>
            </div>
        </section>
    </Discount>
  )
}

const Discount = styled.div`
.discount__wrapper {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--lightGreen-1)  url(${DiscountIllustration}) no-repeat bottom right / 100px;
}

.discount__images {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
}

.discount__images img {
  object-fit: cover;
  border-radius: 12px;
}

.discount__img1 {
  flex: 2;
}

.discount__img2 {
  flex: 3;
}

.discount__text {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--green-1);
  margin-bottom: .5rem;
}

.discount__title {
  font-size: 1.8rem;
  color: var(--black-1);
  font-weight: 600;
  margin-bottom: 1rem;
}

.discount__price {
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  .discount__oldPrice {
    color: var(--black-2);
    text-decoration: line-through;
  }
  .discount__newPrice {
    color: var(--green-1);
  }
}

.discount__stars {
  width: max-content;
  height: 15px;
  margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
  .discount__wrapper {
    flex-direction: row;
    gap: 4rem;
    padding: 2rem;
    align-items: center;
    background-size: 150px;
    margin: 0 auto;
  }

  .discount__images {
    flex: 5;
    margin-bottom: 0;
    gap: 2rem;
    .discount__img1,
    .discount__img2, 
    .discount__img3 {
      flex: 1;
      height: 350px;
    }
  }

  .discount__info {
    flex: 3;
  }

    .discount__text {
      font-size: 2.4rem;
    }

    .discount__title {
      font-size: 3.6rem;
      margin-bottom: 1.5rem;
    }
    
    .discount__price {
      font-size: 2.4rem;
    }

    .discount__stars {
      height: 20px;
      margin-bottom: 2rem;
    }
}

@media only screen and (max-width: 1000px) {
  .discount__wrapper {
    gap: 2rem;
  }

  .discount__images {
    .discount__img3 {
      display: none;
    }
  }
}
`;

export default DiscountSection