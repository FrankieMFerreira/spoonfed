import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { addTemplate } from '../actions'
import PartyItemForm from './PartyItemForm'

const CLOUDINARY_UPLOAD_PRESET = 'SpoonfedPartyTemplate';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/projects/upload';



export default class PartyTemplateForm extends React.Component{

  componentWillReceiveProps(nextProps) {
    this.setState( nextProps.template )
  }


  constructor(props){
    super(props)

    const { title, description, theme_category, min_age, max_age, party_picture, items_attributes = [] } = props.template
    const parentID = this.props.parentID

    this.state = {
      title,
      description,
      theme_category,
      min_age,
      max_age,
      party_picture,
      items_attributes,
      uploadedFile: null,
      uploadedFileCloudinaryUrl: '',
      parentID
    }
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
          party_picture: response.body.secure_url
        });

      }
    });

  }

  handleSubmit(event){
    event.preventDefault()
    let curr = this
    let itemArray = []
    curr.state.items_attributes.map((item, index) => {
      let curItem = curr.refs['items_attributes'+index]
      itemArray = [...itemArray, curItem.state]


    })
    let curState = this.state
    curState.items_attributes = itemArray

    this.props.addTemplate(curState)
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
  	case  'theme_category':
      this.setState({
        theme_category: event.target.value
      })
      break
  	case  'min_age':
      this.setState({
        min_age: event.target.value
      })
      break
  	case  'max_age':
      this.setState({
        max_age: event.target.value
      })
      break

  	}
  }

  // handleItemChange(event){

  //   event.preventDefault()
  //   this.setState({items_attributes: [...this.state.inputs, event]})
  // }

  handleAddNewItem(event){
    event.preventDefault()

    this.setState({items_attributes: [...this.state.items_attributes, {name:'', description:'', category: '', default_price:''}]})

  }



  render(){
    return(
      <div>
        <h3>Make a Party Template!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><input placeholder='Party Template Name' type='text' onChange={this.handleOnChange.bind(this)} name='title' value={this.state.title}/></p>
          <p><input  placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Theme Category' type='text' onChange={this.handleOnChange.bind(this)} name='theme_category' value={this.state.theme_category}/></p>
          <p><input placeholder='Minimum Age' type='text' onChange={this.handleOnChange.bind(this)} name='min_age' value={this.state.min_age}/></p>
          <p><input placeholder='Maximum Age' type='text' onChange={this.handleOnChange.bind(this)} name='max_age' value={this.state.max_age}/></p>
           
           // <button className="waves-effect waves-light btn red-background" onClick={this.handleAddNewItem.bind(this)}>Click to add more items</button>

          {this.state.items_attributes.map ((item, index) => {
            return (<PartyItemForm ref={'items_attributes'+index} key={index} id={index}/>)
          })}


         






            <div className='FileUpload'>
              <br/>
              <br/>
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
            </div>
          <p><button className="f3 ba button-yo f6 bg-white link hover-bg-light-purple br-pill ph3 pv2 mb2 dib light-purple hover-white light-purple">Save</button></p>

        </form>
         <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>

      )
  }

}
