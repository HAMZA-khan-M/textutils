    import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

    export default function Navbar(props) {
      return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} navbar-${props.gmode} bg-${props.gmode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.About}</Link>
                </li>
              
              
            </ul>
         {/*    <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>*/}
           <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light ' :'dark' }`}>
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable {props.mode === 'light' ? 'dark' : 'light'}</label>
</div>
<div className={`form-check form-switch text-${props.gmode === 'dark' ? 'light ' :'dark' }`}>
  <input onClick={props.togglegMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable {props.gmode === 'light' ? 'GREEN' : 'light'}</label>
</div>
          </div>
        </div>
      </nav>
      )
    }

    Navbar.propTypes = {
        // You can declare that a prop is a specific JS type. By default, these
        // are all optional.

      // title: PropTypes.string.isRequired,

        title: PropTypes.string,
        Home : PropTypes.string,
        About : PropTypes.string
    }
    /*
    Navbar.defaultProps = {
        titl: 'insert valid title',
        Home: 'insert valid Home',
        About: 'insert valid About'
    }
        */