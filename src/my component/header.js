import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function header(props) {
  let pos={
    position:"fixed",
    width:"100%"
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary"style={pos}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/"><span className="nav-link active" aria-current="page">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about"><span className="nav-link">About</span></Link>
            </li>
          </ul>
          {props.searchbar?<form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success bg-light" type="submit">Search</button>
          </form>:""}
        </div>
      </div>
    </nav>
  )
}

header.defaultProps = {
    title:"Chutiya",
    searchbar:true
}

header.propTypes ={
    title:PropTypes.string,
    searchbar:PropTypes.bool.isRequired
}
