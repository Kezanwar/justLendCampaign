import React from 'react';
import './formComponent__4.css';

const FormComponent__4 = (props) => {

    const { person: {
        firstName,
        lastName,
        dob,
        email,
        telephone
    } } = props.campaign;


    const campaignFirstNameHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, person: { firstName: e.target.value } }
        ));
    }

    const campaignLastNameHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, person: { lastName: e.target.value } }
        ));
    }

    const campaignDobHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, person: { dob: e.target.value } }
        ));
    }

    const campaignEmailHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, person: { email: e.target.value } }
        ));
    }

    const campaignTelephoneHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, person: { telephone: e.target.value } }
        ));
    }

    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>5. About You</h2>
            </div>
            <div>
                <form className='form'>

                    <div className='form__dbl-container'>
                        <div className='formInputContainer firstName'>
                            <label>First Name</label>
                            <input onChange={campaignFirstNameHandler} value={firstName} type='text'></input>
                        </div>
                        <div className='formInputContainer lastName'>
                            <label>Last Name</label>
                            <input onChange={campaignLastNameHandler} value={lastName} type='text'></input>
                        </div>
                    </div>
                    <div className='form__dbl-container'>
                        <div className='formInputContainer firstName'>
                            <label>Date of Birth</label>
                            <input onChange={campaignDobHandler} value={dob} type='date'></input>
                        </div>
                        <div className='formInputContainer lastName'>
                            <label>Email Address</label>
                            <input onChange={campaignEmailHandler} value={email} type='text'></input>
                        </div>
                    </div>
                    <div className='formInputContainer telephone'>
                        <label>Contact Number</label>
                        <input onChange={campaignTelephoneHandler} value={telephone} type='text'></input>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default FormComponent__4
