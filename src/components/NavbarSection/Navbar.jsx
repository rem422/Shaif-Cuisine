import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'
import { RiMenu3Line } from 'react-icons/ri'
import Logo from '../Global/Logo/Logo'

const Navbar = () => {

	// Shows the Menu button when the screen size is equal to or less than 760px
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
    window.addEventListener('resize', () => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    },[])
})

// Shows and hides the Navmenu
	const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Navigation>
    <div className="container">
        <div className="nav">
        <Link to="/">
            <Logo />
        </Link>
        <div className="nav__menu">
			<div className={isMobile && isNavOpen ? "nav__bgOverlay active" : undefined} onClick={() => setIsNavOpen(false)}></div>

			<nav className={isMobile && isNavOpen ? 'open' : undefined}>
            {isMobile && (
            <div className="close_icon" tabIndex="0" role="button" onClick={() => setIsNavOpen(false)} onKeyDown={() => setIsNavOpen(false)}>
                <FiX />
            </div>
            )}
            <ul>
                <li onClick={() => setIsNavOpen(false)}>
					<Link to="/">Home</Link>
				</li>
                <li onClick={() => setIsNavOpen(false)}>
					<Link to="/menu">Menu</Link>
				</li>
                <li onClick={() => setIsNavOpen(false)}>
					<Link to="/about">About</Link>
				</li>
                <li onClick={() => setIsNavOpen(false)}>
					<Link to="/contact">Contact</Link>
				</li>
				<li onClick={() => setIsNavOpen(false)}>
                <Link to="/booking">
				<button className='btn primary-btn'>Book Table</button>
                </Link>
				</li>
            </ul>	
			</nav>
			{isMobile && (
            <div className="menu_icon" tabIndex="0" role="button" onClick={() => setIsNavOpen(true)} onKeyDown={() => setIsNavOpen(true)}>
                <RiMenu3Line />
            </div>
            )}
        </div>
        </div>
    </div>
    </Navigation>
  )
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background: var(--lightGreen-2);
    z-index: 1000;

	.nav {
		display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
	}
		nav ul li{
            display: inline-block;
			margin: 0 1rem;
			a {
            display: inline-block;
            padding: .5rem 1rem;
            color: var(--black-1);
            font-size: 1.8rem;
            font-weight: 500;
            transition: var(--transition);
        }
            &:hover {
                a {
                    color: var(--green-1);
                }
                
            }
		}

    .nav__menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .menu_icon,
    .close_icon {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.4rem;
        cursor: pointer;
    }

    .close_icon {
        position: absolute;
        right: 22px;
        top: 15px;
		color: var(--black-1);
        transition: all .3s ease;
    }

@media only screen and (max-width:768px){
nav {
        z-index: 1000;
        position: fixed;
        top: 0;
        right: 0%;
        height: 100vh;
        width: 80%;
		max-width: 250px;
        background-color: var(--lightGreen-1);
        display: flex;
		align-items: center;
        justify-content: flex-end;
		padding-right: 2rem;
        transform: translateX(100%);
        overflow: hidden;
        transition: .3s ease-in transform;
    }

	nav.open {
        transform: translateX(0);
    }

    nav ul li {
        display: block;
        text-align: right;
        /* width: 100%; */
        margin-bottom: 2rem;
        a {
            font-size: 1.6rem;
        }
    }

	.nav__bgOverlay {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1000;
		height: 100vh;
		width: 100%;
		background: rgba(18, 24, 14, 0.808);
		display: none;
	}
	.nav__bgOverlay.active {
		display: block;
	}
}
`;

export default Navbar