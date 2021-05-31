import './Projects.css'
import ProjectTile from './ProjectTile'
import Slide from 'react-reveal/Slide';
const Projects = () => {
    return ( 
        <div className="project">
            <div className='project__container '>
            <Slide bottom>
                         <ProjectTile/>
                        <ProjectTile/>
                        <ProjectTile/>
                        <ProjectTile/>
                        <ProjectTile/>
                        <ProjectTile/>
        </Slide>
                   
            </div>
               
        </div>
     );
}
 
export default Projects;