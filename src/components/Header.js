import React from 'react'
import logo from "../assets/tasklogo512.png"

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="task tracker logo"/>
            <span>Task Tracker</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}
