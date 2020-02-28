import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'

import { addEvent } from '../actions'
// import EventNewForm from './EventNewForm'
import PartyTemplateShow from './PartyTemplateShow'

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');


class EventNew extends React.Component{
  constructor(props){
    super(props)
    let partyTemplateID = props.routeParams.id
    this.state = {
      title: '',
      description: '',
      party_template_id: partyTemplateID,
      num_attendees: '',
      date: '',
      start_time: '',
      end_time: ''
    }
  }

  getInitialState() {
   return {
     date: moment(),
   };
  }

 handleChange(date) {
   this.setState({
     date: date
   });
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
  	case  'start_time':
      this.setState({
        start_time: event.target.value
      })
      break
  	case  'end_time':
      this.setState({
        end_time: event.target.value
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
          <p><input placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Number of Attendees' type='text' onChange={this.handleOnChange.bind(this)} name='num_attendees' value={this.state.num_attendees}/></p>
          <input type="time" name="start_time" onChange={this.handleOnChange.bind(this)} name='start_time' value={this.state.start_time}/>
          <input type="time" name="end_time" onChange={this.handleOnChange.bind(this)} name='end_time' value={this.state.end_time}/>
          <p><DatePicker placeholderText='Event Date' selected={this.state.date} onChange={this.handleChange.bind(this)} showMonthDropdown showYearDropdown/></p>
          <p><input type='submit' width="150"/></p>
        </form>
        < PartyTemplateShow templateID={this.state.party_template_id } />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventNew)
