import React from 'react'

const Label = ({ forValue, label, className }) => { 
  return <label 
          className={className} 
          htmlFor={forValue}
          >
            {label}
          </label>
  
}
export default Label