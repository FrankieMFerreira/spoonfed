import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, getUser, loginUser } from '../actions/index'
import { connect } from 'react-redux'


class UserLogin extends Component {

	constructor (){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault()
		const user = {email: this.refs.email.value, password: this.refs.userPassword.value}
		this.props.loginUser(user)
	}

	render(){
		return (
			<div className='row'>
			<h4 className='center'> Please enter your login information here:</h4>
				<form className='col s12' onSubmit={this.handleSubmit} >
				<div className='row'>
					<div className="input-field col s6">
						<input ref='email' type='text' placeholder='Enter Email'/>
					</div>
					<div className="input-field col s6">
						<input type='password' ref='userPassword' placeholder="Enter Password"/>
					</div>
					</div>
					<button className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple" type='submit'> Submit </button>
				</form>
			</div>


			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createUser, getUser, loginUser}, dispatch )
}

export default connect(null, mapDispatchToProps)(UserLogin)
