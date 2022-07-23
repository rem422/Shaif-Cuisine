import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Global/Logo/Logo'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {

const getYear = () => {
    return new Date().getFullYear();
}


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
                        <ol className='footer__text'>
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
                    <ol className='footer__text'>
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
                    <ol className='footer__text'>
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
                    <ol className='footer__text'>
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
    <div className="copyright">
        <div className="container">
            <p className='copyright__text'> &copy; copyright {getYear()} Shaif's Cuisine | All rights reserved</p>
        </div>
    </div>
    </FooterSection>
  )
}

const FooterSection = styled.div`
    background-color: var(--lightGreen-1);
    padding: 5rem 0 2rem 0;
    margin-top: 5rem;

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

.footer__socials svg {
    width: 20px;
    color: var(--black-2);
}

.footer_text_title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--black-1);
    font-weight: 600;
}

.footer__text a {
    color: var(--black-2);
    font-size: 1.4rem;
    font-family: 'Raleway', sans-serif;
    margin-bottom: .5rem;
    line-height: 1.4em;
}

.copyright {
    padding: 1rem 0;
    .copyright__text {
        font-size: 1.4rem;
        text-align: center;
    }
}

@media only screen and (min-width:768px) {
    padding: 8rem 0 4rem 0;

    .footer__wrapper {
        flex-direction: row;
    }

    .footer_col_1 {
        flex: 4;
    }

    .footer_col_2,
    .footer_col_3,
    .footer_col_4 {
        flex: 2;
    }

    .footer__desc {
        max-width: 300px;
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }

    .footer__socials-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .footer_text_title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .footer__text a {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }


.copyright {
    padding: 1rem 0;
    .copyright__text {
        font-size: 1.6rem;
        text-align: left;
    }
}
}
`;

export default Footer