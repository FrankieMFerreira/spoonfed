import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default class Quiz extends React.Component {

  constructor(){
    super()

    const questions = [
    {
      question: 'Where are you throwing this shindig?',
      hint: 'A town is nice. Also a zip code works well',
      answer: 'location'
     },
     {
      question: 'How many people are you hosting?',
      hint: 'Are you feeling intimate or like the belle of the ball?',
      answer: 'num_attendees'
     },
     {
      question: 'When is the magic happening?',
      hint: 'Save the date',
      answer: 'date',
      type: 'datepicker'
     }]

    this.updateField = this.updateField.bind(this)
    this.resetQuestions = this.resetQuestions.bind(this)
    this.addToItems = this.addToItems.bind(this)
    this.addItems = this.addItems.bind(this) 
    this.state = {
      step: 1,
      location,
      buttonText: 'Next steps!',
      date: moment(),
      questions: questions,
      headline: "Let's get cracking!",
      items: [{name: ''},{name: ''},{name: ''},{name: ''}]
    }
  }

  handleChange(date) {
   this.setState({
     date: date
   });
 }

 handleSubmit(e){
  e.preventDefault
 }

  resetQuestions() {

  if (this.state.step === 1) {
    this.setState({
      step: 2,
      questions: [],
      headline: 'A perfect party requires precise planning',
      buttonText: 'Onwards!',
      planningStage: true
    })
  }

  if (this.state.step === 2 ) {
    const { location, num_attendees, items} = this.state,
          item_categories_attributes  = items

    axios.post('http://localhost:3000/api/v1/parties', { party: {location, num_attendees, item_categories_attributes} } ).then( response => browserHistory.push(`/party/${response.data.id}`))

  }

  
}


addToItems(event, index){
  const items = this.state.items
  items[index] = {name: event.target.value}

  this.setState( { items: items } )
}

addItems(){
  this.setState( {items: this.state.items.concat({name: ''})})
}

 updateField(inputKey) {
    // This function gets attached to an 'onChange' event for the child inputs. When a user types, the form's state updates. For example, if you type your name, user.name gets updated in the form's state. Then, when it comes time to submit, we just pass along the form's state.

    const that = this

    return function(event){
        that.setState( { [inputKey]: event.target.value } )
        }
    
  }


  render(){

    const questions = this.state.questions

  

    return(
      <div>
        <h1 className="tc">{this.state.headline}</h1>
          {questions && questions.map( (question, index) =>
            <div>
              <p className="mb0 pb0">{question.question}</p>
              <p className="f6 lh-copy i mt0 pt0 mid-gray">{question.hint}</p>
            { question.type == 'datepicker' ?  <DatePicker placeholderText='Event Date' selected={this.state.date} onChange={this.handleChange.bind(this)} showMonthDropdown showYearDropdown/> :  <input type="text" onChange={this.updateField( question.answer )}  /> 
          }
            </div>
           )}

          { this.state.planningStage && 
            <span>
            <p className="mb0 pb0"> What do you need for your party?</p>
            <p className="f6 lh-copy i mt0 pt0 mid-gray"> Examples to spark the imagination: caterer, dj, florist, cat wrangler, pony brigade, cake maker extraordinare</p>
            <form className="w-100" onSubmit={this.onSubmit} >
            {this.state.items.map( (item, index) => 
               <input className="w-15-ns mh3" key={index} type="text" value={this.state.items[index].name} onChange={event => this.addToItems(event, index)} /> )}
            
           
        </form>
               <button className="ba hover-bg-light-green pointer button-yo f4 link bg-light-purple br-pill ph3 pv2 mb2 dib white" onClick={this.addItems} > + </button>
            
          </span>

          }

          <button className="pointer center ba button-yo f4 link hover-bg-light-purple bg-white br-pill ph3 pv2 mb2 db light-purple hover-white light-purple mt2" onClick={this.resetQuestions} > {this.state.buttonText} </button>


      </div>
      )
  }

}