import React, { useState } from 'react';
import Main__form from './main__form/main__form';
import Main__progressBar from './main__progressBar/main__progressBar';

import './main__formSection.css';



const Main__FormSection = () => {


    const [formCount, setFormCount] = useState(0);


    const updateProgressHandler = () => {

        setFormCount(prev => prev + 1);

    }




    return (
        <div className='main__FormSection'>
            <Main__progressBar formCount={formCount} setFormCount={setFormCount} />
            <button className='progbtn' onClick={updateProgressHandler}>Progress</button>
            <Main__form />
        </div>
    )
}

export default Main__FormSection
