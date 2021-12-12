import React from 'react';
import CampaignSummary from './campaignSummary/campaignSummary';
import FormControlBox from './formControlBox/formControlBox';
import './main__form.css';

const Main__form = (props) => {

    // make an array of form components (include keys)
    // render arr[props.formCount]
    // just entrance animation for formCmponent might work, if not react-spring

    return (
        <div className='Main__form'>
            <div className='formComponentWrapper'>
                <div className="formComponent0"></div>
                <FormControlBox formCount={props.formCount} setFormCount={props.setFormCount} />
            </div>
            <CampaignSummary />
        </div>
    )
}

export default Main__form
