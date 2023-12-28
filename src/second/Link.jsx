import React from 'react'

export default function Links() {
  return (
    <div>
     <h3 style = {{fontSize : "19px",textAlign: "start",marginLeft : "30px",fontWeight :"bold",marginTop : "20px"}}>Links</h3> 


<ul>
  <li className = "Linked" style = {{display : "flex"}} >
  <i class="fa-brands fa-linkedin fa-1x" style = {{marginTop : "5px"}}></i>  
  <a style = {{color : 'white'}} href="https://github.com/Manivarma8">Github</a></li>
  </ul>


<ul>
  <li className = "Github" style = {{display : "flex"}}>
  <i class="fa-brands fa-github" style = {{marginTop : "5px"}}></i>
  <a style = {{color : 'white'}} href="https://www.linkedin.com/in/manivarman97/">Linkin</a></li>
 
</ul>

<ul>
  <li className = "Github" style = {{display : "flex"}}>
  <i class="fa-brands fa-webflow" style = {{marginTop : "5px"}}></i>
  <a style = {{color : 'white'}} href="https://www.frontendmentor.io/profile/Manivarma8">Frontend Mentor</a></li>
 
</ul>

<ul>
  <li className = "Github" style = {{display : "flex"}}>
  <i  class="fa-brands fa-webflow" style = {{marginTop : "5px"}}></i>
  <a style = {{color : 'white'}} href="https://app.netlify.com/user/settings/">Netlify(LiveServer)</a></li>
 
</ul>
</div>
    
  )
}
