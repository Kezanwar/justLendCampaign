import React from 'react'
import './campaignSummary.css'

const CampaignSummary = (props) => {
    return (
        <div className='CampaignSummary'>
            <h2>Summary</h2>
            <div className='campaignImage'>
                <i class="far fa-images"></i>
            </div>
            <h4 className={props.campaign.title === '' ? 'greyedOut' : ''} >{props.campaign.title}</h4>
            <h4 className={props.campaign.tagline === '' ? 'greyedOut' : ''} >{props.campaign.tagline}</h4>
            <h4 className={props.campaign.description === '' ? 'greyedOut2' : ''} >{props.campaign.description}</h4>
            <div className='campaignValues' >
                <p>Lend Amount: £{props.campaign.amount}</p>
                <p>Interest Rate: {props.campaign.interestRate}%</p>
                <p>Repayment Length: {props.campaign.length + ' Months'}</p>
            </div>


        </div>
    )
}

export default CampaignSummary
