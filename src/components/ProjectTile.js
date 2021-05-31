import { Button } from 'react-bootstrap'
import './ProjectTile.css'

const ProjectTile = ({title}) => {
    const link = 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
    return ( 
        <div className='ProjectTile'>
                 <div className="ProjectTile__image">
                                <img src={link} alt="" />
                 </div>
                 <div className="ProjectTile__title">
                               <h3>{title}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum minima consequatur tenetur maiores. Maxime commodi doloribus totam perspiciatis natus!
                                </p>
                                <div className='tech'>
                                        <span ># Node js</span>
                                        <span ># React</span>
                                        <span ># TypeScript</span>
                                        <span >Node js</span>
                                </div>
                                

                 </div>
                 <div className='ProjectTile__titleButton'>
                       <button className='btn'> Live  </button>
                       <button className='btn'> Sourch code </button>

                 </div>
        </div>
     );
}
 
export default ProjectTile;