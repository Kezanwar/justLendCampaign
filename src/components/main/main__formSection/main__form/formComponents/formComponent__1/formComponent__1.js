import React from 'react';
import './formComponent__1.css';

const FormComponent__1 = (props) => {

    const { title, type, tagline } = props.campaign;


    const campaignTypeHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, type: e.target.value }));
    }

    const campaignTitleHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, title: e.target.value }));
    }

    const campaignTaglineHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, tagline: e.target.value }));
    }

    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>1. Campaign Details</h2>
            </div>
            <div>
                <form className='form'>
                    <div className='formInputContainer'>
                        <label>Choose Campaign Type</label>
                        <select onChange={campaignTypeHandler} value={type}>
                            <option> Choose An Option </option>
                            <option value='Car Purchase'> Car Purchase </option>
                            <option value='House Deposit'> House Deposit </option>
                            <option value='Student Living'> Student Living </option>
                            <option value='Learning To Drive'> Learning To Drive </option>
                            <option value='Consolidate Debts'> Consolidate Debts </option>
                        </select>
                    </div>
                    <div className='formInputContainer'>
                        <label>Campaign Title</label>
                        <input onChange={campaignTitleHandler} value={title} type='text'></input>
                    </div>
                    <div className='formInputContainer'>
                        <label>Campaign tagline</label>
                        <input onChange={campaignTaglineHandler} value={tagline} type='text'></input>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormComponent__1


