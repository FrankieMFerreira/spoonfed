import React from 'react'
import { Link } from 'react-router'
import { logoutUser, checkSession } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'


class Header extends React.Component {

  componentDidMount(){
    this.props.checkSession()
  }

  handleSignOut(){
    this.props.logoutUser()
  }

  showMenuItem(item, session) {
    if( item.loggedIn && !session ){
      return false
    } else if (item.loggedOut && session ) {
      return false
    }
      return true
  }




  render() {

    const navLinks = [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Profile',
        path: '/profile',
        loggedIn: true
      },
      {
        title: 'Browse Parties',
        path: '/parties'
      },
      {
        title: 'Plan your Party',
        path: '/parties/quiz',
        loggedIn: true
      },
      {
        title: 'Sign Up',
        path: '/signup',
        loggedOut: true
      },
      {
        title: 'Log In',
        path: '/login',
        loggedOut: true,
      },
      {
        title: 'Log Out',
        path: '/logout',
        loggedIn: true,
        action: this.handleSignOut.bind(this)
      }
      ]

    return(
      <nav className='header--nav fl w-20-ns pv2' >
        <Link to='/' className='header--link logo--link tc v-mid'>
          SpoonFed
        </Link>
        <div className='header--links tc' >
          { navLinks.map( (item, index) => {

              let active = ( item.path === this.props.location.pathname ? 'header--link header--link-current' : '' )
              let linkPosition = (item.index === ( navLinks.length - 1) ? 'header--link-last' : 'header--link')
              if( this.showMenuItem(item, this.props.session) ){
                return (
                  <Link key={index}
                        to={item.path}
                        title={item.title}
                        onClick={item.action}
                        className={`db pa3 f3 hover-light-purple lh-copy ${linkPosition} ${active}`} >
                    {item.title}
                  </Link>
              )
              }
              return ''
            })}



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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
