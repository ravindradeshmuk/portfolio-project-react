import React from 'react'
import {Link} from "react-router-dom"
import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Link to="/"><li>home</li></Link>
        <Link to="/about"><li>about</li></Link>
        <Link to="/ressume"><li>ressume</li></Link>
        <Link to="/contactme"><li>contactme</li></Link>
        


    </div>
  )
}

export default Navbar