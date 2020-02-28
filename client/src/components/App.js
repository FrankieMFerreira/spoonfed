import React, { Component } from 'react'
import Growler     from './growlerContainer'
import NavBar from './base/Header'
import Welcome from './Welcome'
import '../css/tachyons.css'

export default class App extends Component {

  render(){
    return(
      <div>
        <section className="cf">
          <NavBar location={this.props.location}/>
          <Growler shownFor="4785"/>
          <article className="fr lh-copy w-80-ns ph4-ns pa2-ns main-body" >
          {this.props.children}
          </article>
         </section>
      </div>
    )
  }
}
