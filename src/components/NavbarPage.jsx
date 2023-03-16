import React from 'react'
import {Link} from "react-router-dom"
import "./navbarpage.css"
const NavbarPage = () => {
  return (
    <>
    <div className='navbar'>
        <Link to="/propesion"><li>Education profesion</li></Link>
        </div>
        <div>
        <Link to="/skill"> <li>skill detail</li></Link>
        </div>
        </>
  )
}

export default NavbarPage