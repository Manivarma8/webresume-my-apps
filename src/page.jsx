import Objective from "./Objective";
import Education from "./Education";
import Skills from "./Skills";
import Personal from "./Personal";
import Language from './Languages';
const Reality = ()=>{
    return(
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
    )
}

export default Reality;