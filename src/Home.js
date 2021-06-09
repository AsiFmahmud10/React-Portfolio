import { useEffect, useRef } from 'react';
import Type from './components/Type';
import './Home.css'
import lottie from 'lottie-web'
import About from './components/About';
import Skillset from './components/Skillset';
import Media from './components/Media';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Link} from 'react-scroll'
import { FaAngleUp } from 'react-icons/fa';
const Home = () => {
   const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation(
            {
                container:container.current,
                loop:true,
                renderer:'svg',
                autoplay:true,
                animationData:require('./banner.json')
            }
        )
    },[])


    return (
        <div className='home'>
        
         <div className="Home__header " >

                        <div className="Home__headerPic" ref={container}>

             </div>

               <div className="Home__headerInfo">
                            <div>
                                  <h1>Hi I am Asif</h1>
                                    <Type/> 
                                    <div className="home__buton">
                                        <button className='btn'>Resume</button>
                                        <button className='btn' style={{marginLeft:'12px'}}>Contact With ME</button>
                                     </div>
                            </div>
                           
                   </div>
                   <div className='media__container'>
                                            <Media/>
                            </div>
                   
             
         </div>
              <About/>
             <Skillset/>
             <Projects/>
             <Contact/>
             <Footer/>
          
             <div className="back__toTop">
                     <Link activeClass="active" to="home" spy={true} smooth={true}> 
                         <FaAngleUp/>
                      </Link>
             </div>

         </div>
       
      );
}
 
export default Home;