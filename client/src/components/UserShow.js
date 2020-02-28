import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreator } from 'redux'
import axios from 'axios'
import moment from "moment"
import Dropzone from 'react-dropzone';
import request from 'superagent';

class UserShow extends Component {

  constructor (props){
    super(props)
    this.state = {
      user: {}
    }
    this.findUser()

  }


  findUser(){
      let curr = this
      if (curr.props.params.id) {
      axios.get(`http://localhost:3000/api/v1/users/${curr.props.params.id}`).then(response => curr.setState({
        user: response.data
      }))} else {
        axios.get(`http://localhost:3000/api/v1/users/${sessionStorage.id}`).then(response => curr.setState({
          user: response.data
        }))
      }


  }





  render() {
    let user = this.state.user

    if (!user) {
      return(<div> Sorry, not found! </div>)
    } else {
      let userValidate = (user.id == sessionStorage.id)
       return(
        <div className='mw5 mw7-ns center tc bg-near-white pa3 ph5-ns'>
          <div className="col s6 center">
          <div>
          {user.user_profile_picture === '' ? null :
              <div className='tc pa4 h3'>
                <img src={user.user_profile_picture} className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar" />
              </div>}
          </div>
        <br/>
        <br/>
          <h3> { user.name } </h3>
          <h5> Email: { user.email } </h5>
          <h5> Zip Code: { user.zipcode } </h5>
          <h5> Gender: { user.gender } </h5>
          <h5> Date of birth: { moment(user.date_of_birth).format("MMM Do YYYY") } </h5>
          <h5> Bio: { user.bio } </h5>

          <div>
            <br/>
            <h3> My Party Templates </h3>

            <ul className="list ph0 mh0">
            {user.party_templates ? (user.party_templates.map((temp, i) =>
              <li className='mh0 ph0'><a href={`/parties/${temp.id}`}><h5>{temp.title}</h5></a>
                <p>{temp.description}</p>
                <p>Category: {temp.theme_category}</p>
                <br/>
                </li>
              )) : null}



            </ul>
          </div>


        <div>
            <br/>
            {userValidate && <h3 id='myparties'>My Parties</h3>}
            <ul className="list">
            {userValidate ? user.parties ? (user.parties.map((party, i) =>
              <li className='mh0 ph0'><a href={`/party/${party.id}`}><h5>{party.title}</h5></a>
                <p>{party.description}</p>
                <br/>
                </li>
              )) : null : null}



            </ul>
          </div>
          </div>
          <div className="col s6">


          </div>


        </div>


       )
      }
  }
}




export default UserShow
