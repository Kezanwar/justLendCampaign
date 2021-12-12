import React from 'react'
import './formControlBox.css'

const FormControlBox = (props) => {

    const nextFormHandler = () => {

        props.setFormCount(prev => prev + 1);

    }

    const backFormHandler = () => {

        props.setFormCount(prev => prev - 1);

    }




    return (
        <div className='FormControlBox'>
            <button onClick={backFormHandler} className='form-btn back'>Back</button>
            <button onClick={nextFormHandler} className='form-btn next'>Next</button>


        </div>



    )
}

export default FormControlBox
