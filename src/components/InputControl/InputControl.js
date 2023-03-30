import React from 'react';

import './InputControl.css';


const InputControl = ({label,...props}) => {
    
  return (
    <div className='InputControl'>
        { label && <label>{label}</label>}

        {/* all props we can pass here */}
        <input type="text"  {...props} />   
    </div>
  )
}

export default InputControl