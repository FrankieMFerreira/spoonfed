import React from 'react'
import { Link } from 'react-router'



export default class Portal extends React.Component{

  render(){
    return(
      <div>
        <h2> Are you sure? </h2>
        <Link to={`/parties/`} onClick={this.props.handleDelete}>Yes</Link>
        <Link to={`/events/${this.props.eventID}/`} onClick={this.props.handleClick}> No</Link>
      </div>
    )
  }


}
