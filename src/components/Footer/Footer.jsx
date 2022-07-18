import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <FooterSection>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer_col_1">
                    <div className="footer__logo">
                        <Logo/>
                    </div>
                    <p className="footer__desc">Fresh and delicious traditional Kenyan food to delight the whole family.</p>
                    <div className="footer__socials">
                        <h4 className='footer__socials-title'>Folow us</h4>
                        <ol>
                            <li>
                                <Link to="/"><FiFacebook /></Link>  
                            </li>
                            <li>
                                <Link to="/"><FiInstagram /></Link>
                            </li>
                            <li>
                                <Link to="/"><FiTwitter /></Link>
                                
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="footer_col_2">
                    <h3 className="footer_text_title">Links</h3>
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/booking">Book Table</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ol>
                </div>
                <div className="footer_col_3">
                    <h3 className="footer_text_title">Support</h3>
                    <ol>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Support Center</Link>
                        </li>
                        <li>
                            <Link to="/">Feedback</Link>
                        </li>
                    </ol>
                </div>
                <div className="footer_col_4">
                    <h3 className="footer_text_title">Contact</h3>
                    <ol>
                        <li>
                            <Link to="/">+12345678</Link>
                        </li>
                        <li>
                            <Link to="/">abc@example.com</Link>
                        </li>
                        <li>
                            <Link to="/about">GEC, Chittagong, Kenya</Link>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    background-color: var(--lightGreen-1);
    padding: 5rem 0 2rem 0;
    margin-top: 100%;

.footer__wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.footer__logo {
    width: 150px;
    margin-bottom: 2rem;
}

.footer__desc {
    font-size: 1.4rem;
    color: var(--black-2);
    margin-bottom: 2rem;
}

.footer__socials-title {
    font-size: 1.8rem;
    color: var(--black-1);
    margin-bottom: 1rem;
}

.footer__socials li {
    display: inline-block;
    margin-right: .5rem;
}

.footer__socials a {
    padding: .5rem .8rem;
    color: var(--black-1);
    background-color: var(--white-1);
    border: 1px solid var(--green-2);
    border-radius: 8px;
}

`;

export default Footer