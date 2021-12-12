import React from 'react'
import HeaderLogoBox from './header__logoBox/header__logoBox'
import HeaderMenuBox from './header__menuBox/header__menuBox'
import './header.css'
import HeaderSVG from './header__SVG/header__SVG'

const Header = () => {
    return (
        <header className='Header'>
            <HeaderLogoBox />
            <HeaderMenuBox />
            <HeaderSVG />


        </header>
    )
}

export default Header
