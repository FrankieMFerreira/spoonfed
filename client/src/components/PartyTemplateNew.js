import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import PartyTemplateForm from './PartyTemplateForm'
import { updateCurrentTemplate, addTemplate } from '../actions'



class PartyTemplateNew extends React.Component{
  constructor(props){

    super(props)
    if (props.location.query.id ){
      this.parentID = props.location.query.id
      props.updateCurrentTemplate(props.location.query.id)
  }
  }


  render(){

      return <PartyTemplateForm addTemplate={ this.props.addTemplate } template={this.props.template} parentID={this.parentID}/>

  }

}


function mapStateToProps(state){
  return {
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate, addTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateNew)
