import React, { useState } from 'react';
import MainForm from './main__form/main__form';
import MainProgressBar from './main__progressBar/main__progressBar';

import './main__formSection.css';



const Main__FormSection = () => {

    const [formCount, setFormCount] = useState(0);


    return (
        <div className='main__FormSection'>
            <MainProgressBar formCount={formCount} setFormCount={setFormCount} />
            <MainForm formCount={formCount} setFormCount={setFormCount} />
        </div>
    )
}

export default Main__FormSection
