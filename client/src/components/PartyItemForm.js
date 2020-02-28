import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
// import { addItem } from '../actions'


export default class PartyItemForm extends React.Component{

 constructor(props){

    super(props)

    // const { name, description, category, default_price } = props.item

    this.state = {
      name: '',
      description: '',
      item_category: '',
      default_price: ''
    }
 }

 handleNameChange(event){
 	this.setState({name: event.target.value});
 }

  handleDescriptionChange(event){
 	this.setState({description: event.target.value});
 }

  handleCategoryChange(event){
 	this.setState({item_category: event.target.value});
 }

 handlePriceChange(event){
 	this.setState({default_price: event.target.value});
 }


 	render(){

    	return(
    		<div>
                  <h5> New Item </h5>
                  <input placeholder="Item Name" name={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                  <p><input placeholder="Item Description" description={this.state.description} onChange={this.handleDescriptionChange.bind(this)}/></p>
                  <p><input placeholder="Item Category" category={this.state.item_category} onChange={this.handleCategoryChange.bind(this)}/></p>
                  <p><input placeholder="Default Price" default_price={this.state.default_price} onChange={this.handlePriceChange.bind(this)}/></p>

                  

                  <br/>
            </div>


    	)
	}

}

// function mapStateToProps(state){
//   return{
//     event: state.event
//   }
// }

// export default connect(mapStateToProps)(PartyItemForm)
