import React from 'react';
import './formComponent__2.css';

const FormComponent__2 = (props) => {

    const { description } = props.campaign;

    const campaignDescriptionHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, description: e.target.value }));
    }

    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>2. Additional Info</h2>
            </div>
            <div>
                <form className='form'>
                    <div className='formInputContainer'>
                        <label>Campaign Description</label>
                        <textarea onChange={campaignDescriptionHandler} value={description} ></textarea>
                    </div>
                    <div className='formInputContainer'>
                        <label>Upload Campaign Photo</label>
                        <input className='custom-file-input' type='file'></input>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormComponent__2

