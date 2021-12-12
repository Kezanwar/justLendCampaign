import React from 'react';
import './formComponent__3.css';

const FormComponent__3 = (props) => {

    const { amount, interestRate, length } = props.campaign;


    const campaignAmountHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, amount: e.target.value }));
    }

    const interestRateHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, interestRate: e.target.value }));
    }

    const campaignLengthHandler = (e) => {
        props.setCampaign(prev => ({ ...prev, length: e.target.value }));
    }



    return (
        <div className='formComponent formComponent__0 formAnimation'>
            <div className='formTitleBox'>
                <h2>3. How Much You Need</h2>
            </div>
            <div>
                <form className='form'>
                    <div className='formInputContainer borrow-amount__container'>
                        <div class="borrow-amount__wrapper">
                            <label>Enter Your Borrow Amount</label>
                            <div className='borrow-amount__div' ><i class="fas fa-pound-sign"></i><input step="0.01" min="0" onChange={campaignAmountHandler} value={amount} type='number'></input></div>
                        </div>
                        <div className='borrow-amount__message'>
                            A 5% fee will be added to the loan amount. The total loan amount can be seen in the campaign summary.
                        </div>

                    </div>

                    <div className='formInputContainer rangeContainer'>
                        <label>Choose An Interest Rate</label>
                        <input onChange={interestRateHandler} className='range-slider__input' step="1" min="0" max='5' type='range' value={interestRate}></input>
                        <div className='interestRate'>0%</div>
                        <div className='interestRate'>1%</div>
                        <div className='interestRate'>2%</div>
                        <div className='interestRate'>3%</div>
                        <div className='interestRate'>4%</div>
                        <div className='interestRate'>5%</div>
                    </div>
                    <div className='formInputContainer lengthInput'>
                        <label>Choose Repayment Length</label>
                        <select onChange={campaignLengthHandler} value={length}>
                            <option> Choose An Option </option>
                            <option value='6'> 6 Months </option>
                            <option value='12'> 12 Months </option>
                            <option value='36'> 36 Months </option>
                            <option value='48'> 48 Months </option>
                            <option value='60'> 60 Months </option>
                        </select>
                    </div>
                </form>
            </div >

        </div >
    )
}

export default FormComponent__3


