import React, { useState } from 'react';
import CampaignSummary from './campaignSummary/campaignSummary';
import FormControlBox from './formControlBox/formControlBox';
import FormComponent0 from './formComponents/formComponent__0/formComponent__0';
import FormComponent1 from './formComponents/formComponent__1/formComponent__1';
import FormComponent2 from './formComponents/formComponent__2/formComponent__2';
import FormComponent3 from './formComponents/formComponent__3/formComponent__3';
import FormComponent4 from './formComponents/formComponent__4/formComponenet__4';
import FormComponent5 from './formComponents/formComponent__5/formComponent__5';
import FormComponent6 from './formComponents/formComponent__6/formComponent__6';
import FormComponent7 from './formComponents/formComponent__7/formComponent__7';
import './main__form.css';

const Main__form = (props) => {

    const [campaign, setCampaign] = useState({
        type: '',
        title: '',
        tagline: '',
        description: '',
        amount: 0.00,
        interestRate: 0,
        length: '0',
        person: {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            telephone: '',
        },
        address: {
            street: '',
            number: '',
            town: '',
            postcode: '',
            country: ''
        },
        bankDetails: {
            bankName: '',
            accountName: '',
            accountNumber: '',
            sortCode: ''
        },
        password: '',
    });

    const form0 = <FormComponent0 />

    const form1 = <FormComponent1 campaign={campaign} setCampaign={setCampaign} />

    const form2 = <FormComponent2 campaign={campaign} setCampaign={setCampaign} />

    const form3 = <FormComponent3 campaign={campaign} setCampaign={setCampaign} />

    const form4 = <FormComponent4 campaign={campaign} setCampaign={setCampaign} />

    const form5 = <FormComponent5 campaign={campaign} setCampaign={setCampaign} />

    const form6 = <FormComponent6 campaign={campaign} setCampaign={setCampaign} />

    const form7 = <FormComponent7 campaign={campaign} setCampaign={setCampaign} />

    const formArray = [form0, form1, form2, form3, form4, form5, form6, form7]


    return (
        <div className='Main__form'>
            <div className='formComponentWrapper'>
                {formArray[props.formCount]}
                <FormControlBox formCount={props.formCount} setFormCount={props.setFormCount} />
            </div>
            <CampaignSummary campaign={campaign} />
        </div>
    )
}

export default Main__form
