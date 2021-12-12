import React from 'react'
import HeaderMenuItem from './header__menuItem/header__menuItem';
import HeaderSignIn from './header__signIn/header__signIn';
import './header__menuBox.css'

const Header__menuBox = () => {

    const menu = [
        {
            title: 'About Us',
            href: 'https://justlend.co/about-us',
        },
        {
            title: 'Our Blog',
            href: 'https://justlend.co/blog',
        },

        {
            title: 'How We Work',
            href: 'https://justlend.co/testimonials',
        }
    ]

    return (
        <div className='Header__menuBox'>
            {menu.map((menuObj) => {
                return (
                    <HeaderMenuItem key={menuObj.href + menuObj.title} href={menuObj.href}>{menuObj.title}</HeaderMenuItem>)
            })}
            <HeaderSignIn />



        </div>
    )
}

export default Header__menuBox
