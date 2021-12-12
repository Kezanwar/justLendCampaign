import React from 'react'
import './formControlBox.css'

const FormControlBox = (props) => {

    const nextFormHandler = () => {

        props.setFormCount(prev => prev + 1);

    }

    const backFormHandler = () => {

        props.setFormCount(prev => prev - 1);

    }

    let nextText = 'Next';

    if (props.formCount === 0) {
        nextText = 'Start'
    }

    if (props.formCount === 7) {
        nextText = 'Launch'
    }

    return (
        <div className='FormControlBox'>
            <button onClick={backFormHandler} className={props.formCount > 0 ? 'form-btn back' : 'form-btn back back-vis'}>Back</button>
            <button onClick={nextFormHandler} className='form-btn next'>{nextText}</button>
        </div>
    )
}

export default FormControlBox
