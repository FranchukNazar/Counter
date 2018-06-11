import React from 'react';
import '../components/NumberDisplay';

const NumberDisplay = ({ number }) => {
    const num = number ? number : 0; 
    return (
        <div className='numberDisplay'>
            {num}
        </div> 
    );
};

export default NumberDisplay;