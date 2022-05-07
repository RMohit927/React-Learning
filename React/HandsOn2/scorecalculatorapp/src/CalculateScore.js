import React from 'react';

const CalculateScore = ({studentScore}) => {
    const {name, school, total, goal} = studentScore;
    return (<div>
        <h1>Student Details:</h1>
        <div>
            <span>Name:</span>
            <span>{name}</span>
        </div>
        <div>
            <span>School:</span>
            <span>{school}</span>
        </div>
        <div>
            <span>Total:</span>
            <span>{total}</span>
        </div>
        <div>
            <span>Goal:</span>
            <span>{goal}</span>
        </div>
    </div>);
};

export default CalculateScore;