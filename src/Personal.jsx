import React from 'react'
import Mine from "./mine.jpg";
const Personal = ()=>{
  return (
    <div className='curve'>
        <h1 style= {{color : "#fff",padding : "20px 0px 0px 0px",fontSize : "25px",fontWeight:"bold", textDecoration: 'underline' }}>MANIVARMAN</h1>
        <h3 style = {{textDecoration : "underline", fontSize : "18px"}}> Digital Marketer</h3>
         
       <img  className = "img mt-3" src={Mine} alt="" />
       <div className="other">
        <div className="phone">
       <i class="mt-4 fa-solid fa-phone-volume"></i>
        <p class="mt-4" style = {{textDecoration:"underline"}}>  6380512719</p>
        </div>
        <div className="envelop">
<i class="mt-4 fa-solid fa-envelope"></i>
<p class="mt-4"style = {{textDecoration:"underline"}} >univmanivarman@gmail.com</p>
</div>
<div className="address">
       <i className=" mt-4 fa-solid fa-address-card fa-1x " ></i>
       <p className=" mt-4" style = {{textDecoration:"underline"}}>318/6 west main st Thanjavur</p>
       </div>
         </div>
         <div className="Hobby mt-5">
          <h6 style={{color : "#fff", textDecoration: 'underline double'}}>Hobbies</h6>
          <ul>
            <li>Reading Books</li>
            <li>Learning New Skills</li>
             <li>Going to Gym</li>
          </ul>
         </div>
         

    </div>

  )
}

export default Personal;