import React from 'react';
import './formComponent__6.css';

const FormComponent__6 = (props) => {

    const { bankDetails: {
        bankName,
        accountName,
        accountNumber,
        sortCode,
    } } = props.campaign;


    const campaignBankNameHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, bankDetails: { bankName: e.target.value } }
        ));
    }

    const campaignAccountNameHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, bankDetails: { accountName: e.target.value } }
        ));
    }


    const campaignAccountNumberHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, bankDetails: { accountNumber: e.target.value } }
        ));
    }

    const campaignSortCodeHandler = (e) => {
        props.setCampaign((prev) => ({ ...prev, bankDetails: { sortCode: e.target.value } }
        ));
    }


    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>6. Your Bank Details</h2>
            </div>
            <div>
                <form className='form'>

                    <div className='form__dbl-container'>
                        <div className='formInputContainer firstName'>
                            <label>Bank Name</label>
                            <input onChange={campaignBankNameHandler} value={bankName} type='text'></input>
                        </div>
                        <div className='formInputContainer lastName'>
                            <label>Account Name</label>
                            <input onChange={campaignAccountNameHandler} value={accountName} type='text'></input>
                        </div>
                    </div>
                    <div className='formInputContainer'>
                        <label>Account Number</label>
                        <input onChange={campaignAccountNumberHandler} value={accountNumber} type='text'></input>
                    </div>
                    <div className='formInputContainer'>
                        <label>Sort Code</label>
                        <input onChange={campaignSortCodeHandler} value={sortCode} type='text'></input>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default FormComponent__6