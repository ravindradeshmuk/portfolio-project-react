import React from 'react'
import {AiFillFacebook,AiOutlineGooglePlus,AiOutlineInstagram,AiFillYoutube} from "react-icons/ai"
import {FaLaptopCode} from "react-icons/fa"
import {Link} from "react-router-dom"
import Style from "./home.module.css"
import ravi from "../assets/ravi.jpg"

const Home = () => {
  return (
    <div className={Style.homepg}>
        <div id={Style.leftSide}>
       <AiFillFacebook/>
       <AiOutlineGooglePlus/>
       <AiOutlineInstagram/>
       <AiFillYoutube/>
       <h3>hallo i`m Ravi</h3>
       <h2>MERN STACK DEVLAPER<FaLaptopCode/></h2>
       <p className={Style.paregraph}>ksnack of bulding application with frontend and backend oprations</p>
        
       
          <Link className={Style.button} to="">read me</Link> 
        
       
       <Link className={Style.button} to="/ressumepage" > get resume</Link>
         
        </div>
       <div className={Style.picture}>
        <img className={Style.image} src={ravi} alt="image" />
       </div>
 </div>
   
  )
}

export default Home;