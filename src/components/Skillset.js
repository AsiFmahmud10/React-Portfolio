import SkillBox from './SkillBox'
import './Skillset.css'
import Slide from 'react-reveal/Slide'
import { BsCodeSlash } from "react-icons/bs";
import { FaNodeJs,FaCss3Alt,FaReact,FaVuejs,FaGithub } from "react-icons/fa";

const Skillset = () => {
    return ( 
        <div className="skillset" id='skill'>
            <Slide bottom>
            <div className="skillset__container">
            
                            <SkillBox> <BsCodeSlash size='78px' color='red' /></SkillBox>
                            <SkillBox><FaNodeJs size='78px' color='yellow' /> </SkillBox>
                            <SkillBox> <FaCss3Alt size='78px' color='#6cadf4' /></SkillBox>
                            <SkillBox><FaReact size='78px' color='red' /> </SkillBox>
                            <SkillBox> <FaVuejs size='78px' color='green' /></SkillBox>
                            <SkillBox> <FaGithub size='78px' color='black' /></SkillBox>
                           
                    
            </div>
            </Slide> 
        </div>
     );
}
 
export default Skillset;