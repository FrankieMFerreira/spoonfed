import React from 'react'
import roboStyle from '../../utils/stylizer'


class Submit extends React.Component {

  render(){

    const { styles = {}, ...props } = this.props

    const blockStyles = roboStyle( styles )

    return <input type="submit"
             className={ blockStyles( 'submit' ) } 
              {...props} />
      
  }
}

export default Submit
