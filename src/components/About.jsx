import React from 'react'
import Style from "./about.module.css"
import {Link} from "react-router-dom"
import Resume from "../assets/Resume.png"
const  About = () => {
  return (
   <>
    <div> 
        <h2>About Me</h2>
        <p>whay chose me?</p>
        </div>
        <div className={Style.container}>
        <div className={Style.leftside}>
           <img  className={Style.resume} src={Resume} alt="image"/>
        </div>
        <div className={Style.rightside}>
            <p>front-end or back-end devloper will background knowlege of MERN-STACK with 
                aknack of bulding application with atmost efficieacy strong profesion with bsc 
                willing to be an asset for a organization </p>
                <div className={Style.itoms}>
                <li>MERN STACK</li>
                <li>INTRACTIVE FRENT-END AS PER DISIGN</li>
                <li>REACT</li>
                <li>STATE MANEGEMENT</li>
                <div>
                    <Link id={Style.button} to="">HIRE ME</Link>
                    
                <Link id={Style.button} to="/ressumepage">GET RESSUME</Link>
                </div>
                </div>
        </div>
        </div>
        </>  
        
  )
}

export default  About