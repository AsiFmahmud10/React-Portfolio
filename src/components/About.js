import './About.css';
import {ReactComponent as SVG} from '../data_science.svg';
import Particle from './Particle';
import Fade from 'react-reveal/Fade';
const About = () => {
    return ( 
        <div className="about " id='about'>
            <Particle/>
            <Fade bottom>
            <div className=' about__content '>
                
                <div className='about__info'>
                            <h3> LET ME INTRODUCE MYSELF</h3> 
                        <p>
                                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                                I am fluent in classics like C++, Javascript and Python.
                                My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
                                Whenever possible, I also apply my passion for developing products with Modern Javascript Frameworks  like Node.js and React.js
                        </p>
                        
                </div>
                
                
                <div className="about__infoImage">
                           <SVG/>
                </div>
                     
            </div>
            </Fade> 
        </div>
     );
}
 
export default About;