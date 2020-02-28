import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTemplates } from '../actions'
import SearchInput, {createFilter} from 'react-search-input'



class PartyTemplateList extends React.Component{
  componentDidMount(){
    this.props.fetchTemplates()
  }

  constructor (){
    super()
    this.handleSearch = this.handleSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch(event){
    event.preventDefault()
  }

  updateSearch(term) {
    this.setState({
      searchTerm: term
    })
  }

  render(){

  const filters = ['title', 'description'],
        templates = this.props.partyTemplates,
        featured = templates.slice(0, 4),
        filtered = templates.filter(createFilter(this.state.searchTerm, filters)),
          searchStyle = 'input input-search'

    return(
      <div className='partyTemplateListPage tc'>

        <h3 className='tc'> Delightful parties you could be throwing</h3>
        <p className="f6"> Due to database migration issues with Heroku, Spoonfed isn't feeling too well :( </p>
        <p className="f6"> See what she looks like on a good day, <a href="https://i.imgur.com/QB2bKjU.png">HERE</a> </p>


        <SearchInput  type='text' className={searchStyle} onChange={this.updateSearch} />

        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns ">
            { filtered.map( (template, index) => {
            return (
                <a href={`/parties/${template.id}`}>
                <div className="fl w-100 w-third-ns pa2 dib v-top thirds-card">
                  <div className="bg-white pv4">
                       <article >
                       <div className='h5 overflow'>
                          <img src={template.party_picture}/>
                       </div>
                            <div className="pa2 ph3-ns pb3-ns">
                            <div className="dt w-100 mt1">
                            <div className="dtc">
                              <h1 className="f5 f4-ns mv0">{template.title}</h1>
                            </div>
                            <div className="dtc tr">
                              < h2 className="f5 mv0"></h2>
                          </div>
                          </div>
                          <p className="f6 lh-copy measure mt2 mid-gray">
                          {template.description}
                          </p>
                        </div>
                      </article>
                  </div>
                </div>
                </a>
                )
                })}
              </div>
            </div>

       {this.props.children}
      </div>
      )
  }

}




function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTemplates }, dispatch )
}

function mapStateToProps(state){
  return {
    partyTemplates: state.partyTemplates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateList)
