import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import EventEditForm from './EventEditForm'
import { updateCurrentEvent } from '../actions'
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

class EventEdit extends React.Component{
  constructor(props){
    super(props)
    if (props.routeParams.id){

    props.updateCurrentEvent(props.routeParams.id)
  }
  }


  render(){
      return <EventEditForm event={this.props.event} />

  }

}


function mapStateToProps(state){
  return {
    event: state.event
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentEvent }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEdit)
