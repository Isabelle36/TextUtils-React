import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar({title="set ur title here", aboutText="ur About Here ",mode,toggleMode}) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> 
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/About">{aboutText}</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check cursorPoint form-switch text-${mode==='light'?'dark':'light'}`}
                    style={{cursor:'pointer'}}>
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" style={{cursor:'pointer'}} id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" style={{cursor:'pointer'}} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
//   }; //--> dont work in latest as this course is old

