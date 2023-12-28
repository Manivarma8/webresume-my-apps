import Objective from "./Objective";
import Education from "./Education";
import Skills from "./Skills";
import Personal from "./Personal";
import Language from './Languages';
import Page2 from './second/page_2';
import Link from './second/Link'

const Reality = ()=>{
    return(
        <>
        <div className="container row river">
        <div className="col-12 col-md-6 personal">

 <Personal />

        <div className="profession">
            <Objective />
            <Education />
            <Skills />
            <Language />
        </div>
     </div>
     </div> 
  
  <div className="rivers">
    <div className="personals">
        <Link />
    <div className="curves">
    <div className="professions">
         <Page2 />
         </div>
         </div>
    </div>
         </div>

</>
    )
}

export default Reality;