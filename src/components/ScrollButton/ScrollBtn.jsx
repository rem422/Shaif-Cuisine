import { useState, useEffect } from 'react'
import { HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'

const ScrollBtn = () => {
const [show, setShow] = useState(false)

// Shows the button when the window is greater than 30px
const showBtn = () => {
    if (window.scrollY > 30) {
        setShow(true)
    } else {
        setShow(false)
    }
}
// Goes back to top when the btn is clicked
useEffect(() => {
    showBtn()
    window.addEventListener('scroll', showBtn)
},[])

const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
}

  return (
    <ScrollUpBtn>
        <HiChevronUp className={show ?'scroll-up-btn show' : "scroll-up-btn"} onClick={() => scrollToTop()}/>
    </ScrollUpBtn>
  )
}

const ScrollUpBtn = styled.div`
.scroll-up-btn {
    position: fixed;
    height: 40px;
    width: 40px; 
    background: var(--green-1);
    right: 20px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 1;
    font-size: 20px;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease;
    z-index: 1000;
}

.scroll-up-btn:active{
    transform: scale(1.09);
}
.scroll-up-btn.show {
    opacity: 1;
    pointer-events: auto;
    bottom: 30px;
}

@media only screen and (max-width:500px){
.scroll-up-btn {
    height: 30px;
    width: 30px; 
    right: 10px;
    line-height: 40px;
    font-size: 25px;
}
}
`;

export default ScrollBtn