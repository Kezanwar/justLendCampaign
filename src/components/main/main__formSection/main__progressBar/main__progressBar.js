import React from 'react'
import './main__progressBar.css'

const Main__progressBar = (props) => {

    let progressBarContainerWrapperClasses = 'progressBarContainerWrapper';

    let completed = 0;

    const onebyseven = 100 / 7;

    switch (props.formCount) {
        case 0:
            progressBarContainerWrapperClasses = 'progressBarContainerWrapper prog-BfGreen';
            completed = 1;
            break;
        case 1:
            completed = onebyseven;
            break;
        case 2:
            completed = onebyseven * 2;
            break;
        case 3:
            completed = onebyseven * 3;
            break;
        case 4:
            completed = onebyseven * 4;
            break;
        case 5:
            completed = onebyseven * 5;
            break;
        case 6:
            completed = onebyseven * 6;
            break;
        case 7:
            progressBarContainerWrapperClasses = 'progressBarContainerWrapper prog-AfGreen'
            completed = onebyseven * 7;
            break;
        default:
            break
    }

    if (props.formCount === -1) {
        props.setFormCount(prev => prev + 1);
    }

    if (props.formCount === 8) {
        props.setFormCount(prev => prev - 1);
    }


    const wrapperStyles = {
        height: '12%',
        width: '77%',
    }

    const containerStyles = {
        height: '100%',
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        overflow: 'hidden'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#4de6ab',
        borderRadius: '50px',
        transition: 'width 0.4s ease-in-out',
    }


    return (
        <div className='Main__progressBar'>

            <div className={progressBarContainerWrapperClasses} style={wrapperStyles}>

                <div className="progressBarContainer" style={containerStyles}>

                    <div className="progressBar" style={fillerStyles}></div>

                </div>

                <div className={props.formCount === 1 ? 'prog prog-1 prog-col' : 'prog prog-1'} ></div>

                <div className={props.formCount === 2 ? 'prog prog-2 prog-col' : 'prog prog-2'} ></div>

                <div className={props.formCount === 3 ? 'prog prog-3 prog-col' : 'prog prog-3'} ></div>

                <div className={props.formCount === 4 ? 'prog prog-4 prog-col' : 'prog prog-4'} ></div>

                <div className={props.formCount === 5 ? 'prog prog-5 prog-col' : 'prog prog-5'} ></div>

                <div className={props.formCount === 6 ? 'prog prog-6 prog-col' : 'prog prog-6'} ></div>
            </div>

        </div >
    );
}

export default Main__progressBar
