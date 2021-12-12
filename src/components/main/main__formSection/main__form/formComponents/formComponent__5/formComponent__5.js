import React from 'react';
import './formComponent__5.css';

const FormComponent__5 = (props) => {

    const { address: {
        street,
        number,
        town,
        postcode,
        country
    } } = props.campaign;


    const campaignStreetHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, address: { street: e.target.value } }
        ));
    }

    const campaignNumberHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, address: { number: e.target.value } }
        ));
    }


    const campaignTownHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, address: { town: e.target.value } }
        ));
    }

    const campaignPostcodeHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, address: { postcode: e.target.value } }
        ));
    }

    const campaignCountryHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, address: { country: e.target.value } }
        ));
    }



    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>5. Your Address</h2>
            </div>
            <div>
                <form className='form'>

                    <div className='form__dbl-container'>
                        <div className='formInputContainer firstName'>
                            <label>Street Name</label>
                            <input onChange={campaignStreetHandler} value={street} type='text'></input>
                        </div>
                        <div className='formInputContainer lastName'>
                            <label>Number</label>
                            <input onChange={campaignNumberHandler} value={number} type='text'></input>
                        </div>
                    </div>
                    <div className='form__dbl-container'>
                        <div className='formInputContainer firstName'>
                            <label>Town</label>
                            <input onChange={campaignTownHandler} value={town} type='text'></input>
                        </div>
                        <div className='formInputContainer lastName'>
                            <label>Postcode</label>
                            <input onChange={campaignPostcodeHandler} value={postcode} type='text'></input>
                        </div>
                    </div>
                    <div className='formInputContainer telephone'>
                        <label>Country</label>
                        <input onChange={campaignCountryHandler} value={country} type='text'></input>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default FormComponent__5
