import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentTemplate } from '../actions'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Portal from './portal'
import { requireAuthToParties } from '../actions/'


class PartyTemplateShow extends Component {

  componentDidMount(){
  }

  constructor (props){
    super(props)
    if (props.templateID) {
      this.props.updateCurrentTemplate(props.templateID)
    } else {
      this.props.updateCurrentTemplate(this.props.params.id)
    }

    this.togglePortal = this.togglePortal.bind(this)
    this.deleteRequest = this.deleteRequest.bind(this)

    this.state = {
      showPortal: false
    }
  }

  togglePortal(event){
    event.preventDefault()
    this.setState({
      showPortal: !this.state.showPortal
    })
  }



  handleClick(event, template){

  }

  deleteRequest(event){
    event.preventDefault()
    axios.delete(`http://localhost:3000/api/v1/party_templates/${this.props.params.id}`).then(response =>
    {browserHistory.push('/parties')})
  }

  handleDeleteItem(id){
    axios.delete(`http://localhost:3000/api/v1/party_items/${this}/${id}`).then(response =>
    {browserHistory.push(`/parties/`),(browserHistory.push(`/parties/${id}`))})
  }


  render() {

    let template = this.props.template


    if (!template || !template.user) {
      return(<div />)
    } else {
      let userValidate = (template.user.id == sessionStorage.id)
      const templateID = template.id
       return(

        <div>






          <div className="mw9 center ph3-ns cf">


              <div className="fl w-100 w-50-ns pa2">

                  <div>
                    <div className='f-subheadline lh-title'> { template.title } </div>
                    <div className='col s3'>
                    <a href={`/parties/new?id=${template.id}`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple">Clone</a>

                      <a href={`/parties/${template.id}/events/new`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple">Make Event</a>

                    {userValidate ?
                      <a href={`/parties/${template.id}/edit`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple">Edit</a>
                      : null}

                    {userValidate ? <a href={`/parties/${template.id}/delete`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple" onClick={this.togglePortal}>Delete</a> : null}
                    </div>
                    <p> Category: {template.theme_category} </p>
                    <h4> Description: {template.description} </h4>
                    <h4> Target Age Range: {template.min_age}-{template.max_age}</h4>
                    <h4> Party Template Creator: {template.user.name} </h4>


                    </div>

              </div>


                <div className="fl w-100 w-50-ns pa2">

                    <div>
                    {template.party_picture === '' ? null :
                      <div>
                        <img className='responsive-img' src={template.party_picture} />
                      </div>}
                    </div>
                  {this.state.showPortal && <Portal handleClick={this.togglePortal} handleDelete={this.deleteRequest} templateId={template.id}/>}
                </div>
            </div>

         <br/>
                  <div className="mw9 center ph3-ns">
                     <ul>
                         <h4> Party Template Items: </h4>
                          {template.items ? (template.items.map((temp, i) =>
                            <li key={i}><h5>{temp.name}</h5>
                              <p>{temp.description}</p>
                              <p>Category: {temp.item_category}</p>
                              <p>Category: {temp.default_price}</p>
{userValidate && <button className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple" onClick={this.handleDeleteItem.bind(temp.id, templateID)}>Delete Item</button>}
                              <br/>
                              </li>
                            )) : null}
                      </ul>


                      <br/>
                       <div className="center">
                          
                        </div>
                        </div>



        </div>
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  return {
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateShow)
