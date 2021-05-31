import { FaFacebook,FaLinkedin,FaGoogle,FaVuejs,FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Media = () => {
    return ( 
        <IconContext.Provider value={{ className: "icon" }}>
                <div className="media">
                       <a href="">  <FaFacebook />    </a>
                           <a href = ''> <FaLinkedin/></a> 
                           <a href = ''>     <FaGithub/></a> 
                           <a href = ''>  <FaGoogle/></a> 
                </div>
       </IconContext.Provider>
        
     );
}
 
export default Media;