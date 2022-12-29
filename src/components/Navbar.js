import React from 'react'
import Toggle from './Toggle'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Nav-Class" >
        <div className="mode">
        <div className="n-name">Todo List</div>
        <Toggle />
      </div>
    </div>
  )
}

export default Navbar