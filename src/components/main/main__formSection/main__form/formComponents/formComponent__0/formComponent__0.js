import React from 'react';
import Wand from '../../../../../../images/color-wand-outline.svg'
import Calendar from '../../../../../../images/calendar-outline.svg'
import ThumbsUp from '../../../../../../images/thumbs-up-outline.svg'
import './formComponent__0.css';

const FormComponent__0 = (props) => {

    // make an array of form components (include keys)
    // render arr[props.formCount]
    // just entrance animation for formCmponent might work, if not react-spring

    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>Start Your Campaign</h2>
            </div>
            <div className='formComponent__0__text-contentBox'>
                <p>HELP US RE-DEFINE PEER TO PEER LENDING.
                </p>
                <p>Our objective is to build sustainable financial relationships between borrowers with clear goals, and familial lenders wanting to do good. We want to help consumers make good long term financial decisions over instant access, high interest products. We also want to do our bit to prevent awkward “you still owe me” conversations and fallouts.</p>
            </div>
            <div className='formComponent__0__iconBox'>
                <div className='iconBox__iconContainer'>
                    <img alt='wand' src={Wand}></img>
                    <h5>Choose your interest rate</h5>
                    <p>Vary the interest rate as you require.</p>
                </div>
                <div className='iconBox__iconContainer'>
                    <img alt='wand' src={Calendar}></img>
                    <h5>Set your term length</h5>
                    <p>From 1 month to 5 years, you decide.</p>
                </div>
                <div className='iconBox__iconContainer'>
                    <img alt='wand' src={ThumbsUp}></img>
                    <h5>Choose an amount</h5>
                    <p>Borrow up to £10,000 with JustLend.</p>
                </div>
            </div>
        </div>
    )
}

export default FormComponent__0
