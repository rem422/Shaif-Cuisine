import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const Logo = ({...rest}) => {
  return (
    <LogoStyles {...rest}>
        <img src={ logo } alt="logo" />
    </LogoStyles> 
  )
}

const LogoStyles = styled.div`
    max-width: 100px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default Logo