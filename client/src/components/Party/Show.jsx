import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentParty } from '../../actions'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Portal from '../portal'
import { requireAuthToParties } from '../../actions/'


class PartyShow extends Component {

  componentDidMount(){
  }

  constructor (props){
    super(props)
    if (props.templateID) {
      this.props.updateCurrentParty(props.templateID)
    } else {
      this.props.updateCurrentParty(this.props.params.id)
    }

    this.togglePortal = this.togglePortal.bind(this)
    this.deleteRequest = this.deleteRequest.bind(this)
    this.onBlur = this.onBlur.bind(this)

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

  onBlur(inputKey) {


    const that = this

    return function(event){
        that.setState( { [inputKey]: event.target.value } )
        let party = {}
        party[inputKey] = event.target.value
        axios.patch(`http://localhost:3000/api/v1/parties/${that.props.template.id}`, party)




  }

}

addItems(){

}


  handleClick(event, template){

  }

  deleteRequest(event){
    event.preventDefault()
    axios.delete(`http://localhost:3000/api/v1/parties/${this.props.params.id}`).then(response =>
    {browserHistory.push('/parties')})
  }

  handleDeleteItem(id){
    axios.delete(`http://localhost:3000/api/v1/item_categories/${id}`).then(response =>
    {browserHistory.push(`/parties/`),(browserHistory.push(`/parties/${id}`))})
  }

  updateItemValue(event) {
    let item = {}
    item['name'] = event.target.value
    axios.patch(`http://localhost:3000/api/v1/item_categories/${this}`, item )
  }

  render() {

    let template = this.props.template


    if (!template || !template.user) {
      return(<div />)
    } else {
      let userValidate = (template.user.id == sessionStorage.id)
      const templateID = template.id
       return(
        <div className='row'>

           { userValidate &&
            <header>
              <input type="text" className="lh-title" placeholder="Title" onBlur={this.onBlur('title')} defaultValue={template.title}  />
              <p><span class="label">Description:</span> <textarea onBlur={this.onBlur('description')} defaultValue={template.description} className="f4 db w-100"/>  </p>
            </header>

           }
           { !userValidate &&
            <header>
              <h1 className='lh-title'>{template.title}</h1>
              <p className="f4 db w-100">{template.description}</p>
            </header>
           }

          <div className='pa4'> Made with ❤ by: { template.user.user_profile_picture &&  <img className='br-100 pa1 ba b--black-10 h3 w3 profile-picture' src={template.user.user_profile_picture} alt={template.user.name} /> } {template.user.name } </div>


           <h4> What you'll need: </h4>
           { template.item_categories && !userValidate &&
            <ul className="list pl0 measure center">
              {template.item_categories.map( ( item, i) => {

                return ( item.name && <li className="lh-copy f3 pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={i}> { item.name } </li> )
             })}
            </ul>
           }

          { template.item_categories && userValidate &&
            <div>
             { template.item_categories.map( (item, i) => {
              return <input className="lh-copy f3 pv3 ba bl-0 bt-0 br-0 b--dotted db b--black-30" defaultValue={item.name} onBlur={this.updateItemValue.bind(item.id)} />


            })}


            </div>


          }





          <br/>
           <div className="center">
            {!userValidate &&
              <div className='col s3'>
              <Link to={`/parties/${template.id}/new`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple">Throw This Party</Link>
              </div>
            }

            <div className='col s3'>
            {userValidate ? <Link to={`/profile#myparties`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple">Save</Link> : null}
            {userValidate ? <Link to={`/parties/${template.id}/delete`} className="f2 ba button-yo f6 link hover-bg-light-purple bg-white br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple" onClick={this.togglePortal}>Delete The Memory</Link> : null}
              </div>

            </div>

          <div className="col s6">
          {template.party_picture === '' ? null :
            <div>
              <img className='responsive-img' src={template.party_picture} />
            </div>}
          </div>
        {this.state.showPortal && <Portal handleClick={this.togglePortal} handleDelete={this.deleteRequest} templateId={template.id}/>}
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
  return bindActionCreators({ updateCurrentParty }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyShow)
