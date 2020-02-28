import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { editTemplate } from '../actions'

class PartyTemplateEditForm extends Component {

componentWillReceiveProps(nextProps) {
    this.setState( nextProps.template )
    if (!(nextProps.template.user.id == sessionStorage.id)){
      browserHistory.push(`/parties/${nextProps.template.id}`)
    }
  }

  constructor(props){
    super(props)
    const { title, description, theme_category, min_age, max_age, id } = props.template

    this.state = {
      title,
      description,
      theme_category,
      min_age,
      max_age,
      id
    }
 }

  handleSubmit(event){
    event.preventDefault()
    this.props.editTemplate(this.state)
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

  render(){
    return(
      <div>
        <h3>Edit Your Party Template!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><input placeholder='Party Template Name' type='text' onChange={this.handleOnChange.bind(this)} name='title' value={this.state.title}/></p>
          <p><input  placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Theme Category' type='text' onChange={this.handleOnChange.bind(this)} name='theme_category' value={this.state.theme_category}/></p>
          <p><input placeholder='Minimum Age' type='text' onChange={this.handleOnChange.bind(this)} name='min_age' value={this.state.min_age}/></p>
          <p><input placeholder='Maximum Age' type='text' onChange={this.handleOnChange.bind(this)} name='max_age' value={this.state.max_age}/></p>
          <p><input type='submit'/></p>
        </form>
      </div>

      )

}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { editTemplate }, dispatch )
}

export default connect(null, mapDispatchToProps)(PartyTemplateEditForm)
