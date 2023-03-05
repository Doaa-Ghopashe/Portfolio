import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom' 
import $ from "jquery";
import styles from "../componentsstyle/navbar.module.css"
import ScreenMode from './Screenmode';

export default function Navbar() {
  useEffect(()=>{
    if(document.location.pathname.split("/").join("") == "About"){
      $("#about").addClass("active")
    }
    else if(document.location.pathname.split("/").join("") == "Projects"){
      $("#projects").addClass("active")
    }
    else{
      $("#home").addClass("active")
    }
  },[])
  const setActive = (e) => {
    $(".nav-link").removeClass("active");
    e.target.classList.add("active");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg position-absolute text-white">
      <button className={`navbar-toggler`} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${styles.navbarcontent}`} id="navbarSupportedContent">
        <ul id="navbar" className={`navbar-nav mr-auto ${styles.linkslist}`}>
          <li className="nav-item" >
            <Link id="home" className="nav-link" onClick={setActive} to='/' >Home</Link>
          </li>
          <li className="nav-item" >
            <Link id="about" className="nav-link" onClick={setActive} to='/About' >About</Link>
          </li>
          <li className="nav-item" >
            <Link id="projects" className="nav-link" onClick={setActive} to='/Projects' >Projects</Link>
          </li>
          <li className={`nav-item ${styles.theme}`}>
            <ScreenMode/>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}
