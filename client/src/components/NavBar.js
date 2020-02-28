import React from 'react'
import { logoutUser, checkSession } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class NavBar extends React.Component {

  componentDidMount(){
    this.props.checkSession()
  }

  handleSignOut(){
    this.props.logoutUser()
  }

  render(){
  return(
    <nav>
    <div className="nav-wrapper padding red-background">
      <a href="/" className="brand-logo ">SpoonFed</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href={`/parties/new`}>Make a Party</a></li>
      <li><a href="/parties">Party Templates</a> </li>
        {this.props.session ? <span>
      <li><a href={`/profile`}>Profile</a></li><li><a href="/" onClick={this.handleSignOut.bind(this)}>Logout</a></li>
      </span> : <span>
      <li><a href="/signup">Signup</a></li> <li><a href="/login">Login</a></li>
    </span>}
      </ul>
    </div>
  </nav>
  )
}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logoutUser, checkSession }, dispatch )
}

function mapStateToProps(state){
  return {
    session: state.session,
    user_id: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
