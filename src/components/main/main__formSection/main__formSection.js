import React, { useState } from 'react';
import MainForm from './main__form/main__form';
import MainProgressBar from './main__progressBar/main__progressBar';

import './main__formSection.css';



const Main__FormSection = () => {


    const [formCount, setFormCount] = useState(0);


    const updateProgressHandler = () => {

        setFormCount(prev => prev + 1);

    }




    return (
        <div className='main__FormSection'>
            <MainProgressBar formCount={formCount} setFormCount={setFormCount} />
            <button className='progbtn' onClick={updateProgressHandler}>Progress</button>
            <MainForm />
        </div>
    )
}

export default Main__FormSection
