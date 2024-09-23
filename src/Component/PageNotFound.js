import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div  className="App">
        <h2>Page you are looking is not available.</h2>
        <br></br>
        <Link to="/">Click here to go to login</Link>
    </div>
  )
}

export default PageNotFound