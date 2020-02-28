import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentEvent } from '../actions'
import moment from "moment"
import Portal1 from './portal_events'



class EventShow extends Component {

  componentDidMount(){

  }

  constructor (props){
    super(props)
    this.props.updateCurrentEvent(this.props.params.id)
    this.togglePortal = this.togglePortal.bind(this)
    this.deleteRequest = this.deleteRequest.bind(this)

    this.state = {
      showPortal: false
    }
  }

  deleteRequest(event){
    event.preventDefault()
    axios.delete(`http://localhost:3000/api/v1/events/${this.props.params.id}`).then(response =>
    {browserHistory.push('/parties')})
  }


  togglePortal(event){
    event.preventDefault()
    this.setState({
      showPortal: !this.state.showPortal
    })
  }

  handleClick(event, template){
    debugger
  }


  render() {
    let event = this.props.event

    if (!event || !event.user) {
      return(<div> Sorry, not found! </div>)
    } else {
      let userValidate = (event.user.id == sessionStorage.id)
       return(
        <div className='row'>
        <br/>
         <div className="col s6">
          <h2> Title: { event.title } </h2>
          <h4> Description: {event.description} </h4>
          <h4> Number of Attendees: {event.num_attendees} </h4>
          <h4> Date: {moment(event.date).format("MMM Do YYYY")} </h4>
          <h4> Start Time: {moment.utc(event.start_time).format('LT')} </h4>
          <h4> End Time: {moment.utc(event.end_time).format('LT')} </h4>

          <h4> Categogy: {event.party_template.theme_category}</h4>



        <br/>
        <div className="center">
          <div className='col s4'>
          {userValidate ? <a href={`/events/${event.id}/edit`} className="waves-effect waves-light btn red-background">Edit</a> : null}
          </div>

          <div className='col s4'>
          {userValidate ? <a href={`/event/${event.id}/delete`} className="waves-effect waves-light btn red-background" onClick={this.togglePortal}>Delete</a> : null}
          </div>
        <br/>
          {this.state.showPortal && <Portal1 handleClick={this.togglePortal} handleDelete={this.deleteRequest} eventID={event.id}/>}
           </div>
        </div>

        <div className="col s6">
          <div>
              {event.party_template.party_picture === '' ? null :
                  <div>
                    <img className='responsive-img circle' src={event.party_template.party_picture} />
                  </div>}
          </div>
        </div>
        </div>
     
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  return {
    event: state.event
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentEvent }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)
