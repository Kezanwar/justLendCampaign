import React from 'react'
import Header__menuItem from './header__menuItem/header__menuItem';
import Header__signIn from './header__signIn/header__signIn';
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
                    <Header__menuItem key={menuObj.href + menuObj.title} href={menuObj.href}>{menuObj.title}</Header__menuItem>)
            })}
            <Header__signIn />



        </div>
    )
}

export default Header__menuBox
