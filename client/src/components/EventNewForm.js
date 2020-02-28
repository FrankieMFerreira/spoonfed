import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'

import { addEvent } from '../actions'


class EventNewForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      party_template_id: '',
      num_attendees: '',
    }
  }


  handleSubmit(event){
    event.preventDefault()
    this.props.addEvent(this.state)
  }


  handleOnChange(event){
    switch(event.target.name){
    case  'title':
      this.setState({
        title: event.target.value
      })
      break
    case  'description':
      this.setState({
        description: event.target.value
      })
      break
    case  'num_attendees':
      this.setState({
        num_attendees: event.target.value
      })
      break
    }
  }

  render(){
    return(
      <div>
        <h3>Make an Event!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><input placeholder='Title' type='text' onChange={this.handleOnChange.bind(this)} name='title' value={this.state.title}/></p>
          <p><input  placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Party Template ID' type='text' onChange={this.handleOnChange.bind(this)} name='party_template_id' value={this.state.party_template_id}/></p>
          <p><input placeholder='User ID' type='text' onChange={this.handleOnChange.bind(this)} name='user_id' value={this.state.user_id}/></p>
          <p><input placeholder='Number of Attendees' type='text' onChange={this.handleOnChange.bind(this)} name='num_attendees' value={this.state.num_attendees}/></p>
          <p><input type='submit'/></p>
        </form>
      </div>

      )
  }

}

function mapStateToProps(state){
  return{
    event: state.event
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addEvent }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNewForm)
