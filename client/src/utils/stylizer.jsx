import classNames from 'classnames'
import defaultStyles from './defaultStyles'

const split = string => string.split(" ")


const stylizer = ( styles = {}, baseStyles ) => ( ...elements ) => {
  
  let argType = typeof styles,
      basicStyles = ( baseStyles ? defaultStyles[baseStyles] : defaultStyles.base),
      element = elements[0],
      customClasses,
      defaultClasses,
      defaults

  if ( argType === 'string' ) {
    return classNames( split(styles), elements )
  }

  if ( styles[element] ) {
    customClasses = split( styles[element] )
  }


defaults = elements.map( el => {
    if ( el && basicStyles[el] ){
      return basicStyles[el]
    } else {
      return el
    }
  })

  if ( defaults && !styles.overRide ) {
    defaultClasses = split( defaults.join(' ') )
  }

  return classNames( defaultClasses, customClasses )
}



export default stylizer