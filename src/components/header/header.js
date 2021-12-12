import React from 'react'
import Header__logoBox from './header__logoBox/header__logoBox'
import Header__menuBox from './header__menuBox/header__menuBox'
import './header.css'
import Header__SVG from './header__SVG/header__SVG'

const Header = () => {
    return (
        <header className='Header'>
            <Header__logoBox />
            <Header__menuBox />
            <Header__SVG />


        </header>
    )
}

export default Header
