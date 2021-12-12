import React from 'react';
import SVG from '../../../../../../images/launch-svg.svg'
import './formComponent__7.css';

const FormComponent__7 = (props) => {


    const campaignPasswordHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, password: e.target.value }));
    }


    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>7. Launch Your Campaign</h2>
            </div>
            <div className='launch-text'>Your campaign is almost ready! Choose a password, review your campaign summary and get ready to launch your campaign!</div>
            <div className='launchForm' >
                <img alt='SVG' src={SVG}></img>
                <div className='launchFormRight' >
                    <div className='formInputContainer'>
                        <label>Choose Password</label>
                        <input onChange={campaignPasswordHandler} type='password'></input>
                    </div>
                    <div className='formInputContainer'>
                        <label>Confirm Password </label>
                        <input onChange={campaignPasswordHandler} type='password'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormComponent__7