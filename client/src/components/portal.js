import React from 'react'
import { Link } from 'react-router'



export default class Portal1 extends React.Component{

  render(){
    return(
      <div>
        <h2> Are you sure? </h2>
        <Link to={`/parties/`} onClick={this.props.handleDelete}>Yes</Link><span> </span>
        <Link to={`/parties/${this.props.templateId}/`} onClick={this.props.handleClick}> No</Link>
      </div>
    )
  }


}
