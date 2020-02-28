import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { editEvent } from '../actions'

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

class EventEditForm extends Component {

componentWillReceiveProps(nextProps) {
    this.setState( nextProps.event )
    if (!(nextProps.event.user.id == sessionStorage.id)){
      browserHistory.push(`/events/${nextProps.event.id}`)
    }
  }

  constructor(props){
    super(props)
    const { title, description, num_attendees, date, start_time, end_time, id } = props.event
    this.state = {
      title,
      description,
      num_attendees,
      date,
      start_time,
      end_time,
      id
    }
 }

  handleSubmit(event){
    event.preventDefault()
    this.props.editEvent(this.state)
  }

  getInitialState() {
   return {
     date: moment(this.state.date).format('MMMM do YYYY')
   };
  }

  handleChange(date) {
   this.setState({
     date: date
   });
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
        min_age: event.target.value
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
        <h3>Edit an Event!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><input placeholder='Title' type='text' onChange={this.handleOnChange.bind(this)} name='title' value={this.state.title}/></p>
          <p><input placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Number of Attendees' type='text' onChange={this.handleOnChange.bind(this)} name='num_attendees' value={this.state.num_attendees}/></p>
          <input type="time" name="start_time" onChange={this.handleOnChange.bind(this)} name='start_time' value={this.state.start_time}/>
          <input type="time" name="end_time" onChange={this.handleOnChange.bind(this)} name='end_time' value={this.state.end_time}/>
          <p><DatePicker placeholderText='Event Date' selected={this.state.date} onChange={this.handleChange.bind(this)} showMonthDropdown showYearDropdown/></p>
          <p><input type='submit' width="150"/></p>
        </form>

      </div>

      )

}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { editEvent }, dispatch )
}

export default connect(null, mapDispatchToProps)(EventEditForm)
