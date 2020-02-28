import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import PartyTemplateEditForm from './PartyTemplateEditForm'
import { updateCurrentTemplate } from '../actions'
import { browserHistory } from 'react-router'


class PartyTemplateEdit extends React.Component{
  constructor(props){
    super(props)

    if (props.routeParams.id){
    props.updateCurrentTemplate(props.routeParams.id)
  }
  }


  render(){
      return <PartyTemplateEditForm template={this.props.template} />
  }
}


function mapStateToProps(state){
  return {
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateEdit)
