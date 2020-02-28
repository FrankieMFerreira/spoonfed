import React from 'react'
import slug from '../../utils/slugged'
import Label from './Label'

 class Dropdown extends React.Component {

  render()  {
    
    const { selectOptions, 
            label, 
            styles = {}, 
            name = slug( label ),
            id = slug( label ),
            ...props } = this.props
    

    return(
      <span>
        { label && 
        <Label forValue={ id } 
               label={ label } />
        }
        
        <select id={ id  } 
                name={name}
                {...props} >
         
          {selectOptions.map( (select, index) => {
            return (
              <option value={select} 
                      key={index} > 
                {select}
              </option>
            )
           })}
        </select>
      </span>
    )
  }
}


export default Dropdown
