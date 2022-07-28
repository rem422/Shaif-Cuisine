import styled from 'styled-components';

const FooterCopyright = () => {

const getYear = () => {
    return new Date().getFullYear();
}

  return (
    <Copyright>
        <div className="container">
            <p className='copyright__text'> &copy; copyright {getYear()} Shaif's Cuisine | All rights reserved</p>
        </div>
    </Copyright>
  )
}

const Copyright = styled.div`
padding: 1rem;
.copyright__text {
    font-size: 1.4rem;
    text-align: center;
}

@media only screen and (min-width:768px) {
    padding: 1rem;
    .copyright__text {
    font-size: 1.6rem;
    text-align: left;
    }
}
`;

export default FooterCopyright