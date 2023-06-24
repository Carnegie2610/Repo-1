import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/changer.jpg'
import  Headersocial from './headersocial' //import of headerSocial component
import Typewriter from 'typewriter-effect';





export const Header = () => {
    return (
    <header>
    <div className='container header__container'>
    

    <h5>Hello I'm</h5>
    <h1>MILKOVIC</h1>
    <h5 className='text-light'>Software Engineer </h5>
    <CTA/>
    <Headersocial/>
    <div className='my_image'>
    <img src={me} alt='milko'/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
    </header>
)
}
export default Header