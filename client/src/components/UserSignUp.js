import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, getUser } from '../actions/index'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone';
import request from 'superagent';

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

const CLOUDINARY_UPLOAD_PRESET = 'SpoonfedPartyTemplate';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/projects/upload';

class UserSignUp extends Component {

	constructor (){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			uploadedFile: null,
      		uploadedFileCloudinaryUrl: '',
					date: '',

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

	onImageDrop(files) {

    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);

  }

   handleImageUpload(file) {
    const curr = this
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {

        curr.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,

        });

      }
    });

  }

	handleSubmit(event){
		event.preventDefault()

		const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value, zipcode: this.refs.zipcode.value, gender: this.refs.gender.value, date_of_birth: this.state.date, bio: this.refs.bio.value, user_profile_picture: this.state.uploadedFileCloudinaryUrl}
		this.props.createUser(user)
	}

	render(){
		return (
			<div className='row'>
			<h4 className='center'> Please create your new account here:</h4>
				<form className='col s12' onSubmit={this.handleSubmit} >
					<div className='row'>
						<div className="mv1 w-100">
							<input ref='name' type="text" placeholder='Enter Name'/>
						</div>
						<div className="mv1 w-100">
							<input ref='email' type="email" placeholder='Enter Email'/>
						</div>
						<div className="mv1 w-100">
							<input type='password' ref='userPassword' placeholder="Enter Password"/>
						</div>
						<div className="mv1 w-100">
							<input type='password' ref='passwordConfirmation' placeholder="Confirm Password"/>
						</div>
						<div className="mv1 w-100">
							<input ref='zipcode' type="text" placeholder="Zip Code"/>
						</div>
						<div className="mv1">
							<input ref='gender' type='text' placeholder="Gender"/>
						</div>
						<div className="mv1">
							<DatePicker placeholderText='Date of Birth' selected={this.state.date} onChange={this.handleChange.bind(this)} showMonthDropdown showYearDropdown/>
						</div>
						<div className="mv1">
							<input ref='bio' type="text" placeholder="Bio"/>
						</div>
						<div className='FileUpload uploader f4 mv2'>
              				<Dropzone
                				multiple={false}
                				accept="image/*"
                				onDrop={this.onImageDrop.bind(this)}>
                				<p>Drop an image or click to select a file to upload.</p>
              				</Dropzone>
            			</div>
					</div>
					<button className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple" type='submit'> Join Us </button>
				</form>
				<div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
              </div>
			</div>


			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createUser, getUser}, dispatch )
}

export default connect(null, mapDispatchToProps)(UserSignUp)
