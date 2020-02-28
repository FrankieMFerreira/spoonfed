import React from 'react'
import slug from '../../utils/slugged'
import Label from './Label'
import roboStyle from '../../utils/stylizer'


class Input extends React.Component {

  
  render(){


    const { label,
            type = "text", 
            styles = {}, 
            name = slug( label),
            id = slug( label ),
            placeholder,
            errorMessage,
            error,
            ...props } = this.props

    const blockStyles = roboStyle( styles )

    return(
      <span className={ blockStyles( 'span' )}>

        { label && 
        <Label className={ blockStyles( 'label' ) }
               forValue={ id } 
               label={ label } />
        }
        
        <input type={ type } 
               id={ id }
               name={ name }
               className={ blockStyles( `input-${type}` ) } 
               {...props} />
     
      </span>

      )

   

  }
}




export default Input
