import React from 'react'
import './header__signIn.css'
import enterSVG from '../../../../images/enter-outline.svg'

const Header__signIn = () => {

    return (
        <div className='Header__signIn__wrapper'>
            <button className='Header__signIn btn-three'>
                Sign in<img alt='signin icon' className='btn-three__svg' src={enterSVG}></img>
            </button>
        </div>
    )
}

export default Header__signIn
