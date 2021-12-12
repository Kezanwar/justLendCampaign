import React from 'react'
import './header__menuItem.css'

const Header__menuItem = (props) => {

    return (
        <div className='Header__menuItem__wrapper'>
            <a href={props.href} className='Header__menuItem'>
                {props.children}
            </a>
        </div>
    )
}

export default Header__menuItem
