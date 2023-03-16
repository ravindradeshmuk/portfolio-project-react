import React from 'react'
import {AiFillFacebook,AiOutlineGooglePlus,AiOutlineInstagram,AiFillYoutube} from "react-icons/ai"
import Style from "./Contact.module.css"

const ContactMe = () => {
  return (
    <> <h3>
    GET IN TOUCH
  </h3>
    <div className={Style.contactpage}>
     
    <div className={Style.leftside}> 
      <AiFillFacebook/>
       <AiOutlineGooglePlus/>
       <AiOutlineInstagram/>
       <AiFillYoutube/>
       <h6>send your email here</h6>
       <input type="message" placeholder='type messege'/>
       </div>
       <div className={Style.rightside}>
        <h6 className={Style.headding}>name</h6>
        <input type=""/>
       <h6 className={Style.headding}>email</h6>
        <input type=""/>
        <h6 className={Style.headding}>message</h6>
        <input type=""/>
       </div>
    </div>
    </>
  )
}

export default ContactMe