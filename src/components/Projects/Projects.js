import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {

  return (
    <div className="review-item">
      <div className="item-content">
        <Link to="/">Back to dashboard</Link>
        <h3>Item</h3>
      </div>
    </div>
  )
}

export default Projects
