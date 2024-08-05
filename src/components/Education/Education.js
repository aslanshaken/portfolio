import React from 'react'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'
import './Education.css'



const Education = () => {
  return (
    <div className="education">
      Education
      <div className="item-content">
        <Link to="/">Back to home</Link>
        <h3>Item</h3>
      </div>
    </div >
  )
}

export default Education
