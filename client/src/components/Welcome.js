import React from 'react'
import { Link } from 'react-router'



export default function Welcome(){
  return(
    <div className='container tc welcome'>
      <h1>SpoonFed</h1>
        <img src="http://i.imgur.com/qLGumrl.jpg" className=" pa1 ba b--black-10" />
      <p className="lh-title"> Plan the best parties, and then throw them again & again </p>
      <Link to='/parties/quiz' className='f2 ba button-yo f6 link hover-bg-light-purple br-pill ph3 pv2 mb2 dib light-purple hover-white light-purple'>Throw Your Next Party </Link>
       <Link to='/parties' className='f2 ba button-yo f6 link hover-bg-light-purple br-pill ph3 ml2 pv2 mb2 dib light-purple hover-white light-purple'>Browse Parties</Link>



  </div>

  )
}
