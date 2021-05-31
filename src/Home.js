import { useEffect, useRef } from 'react';
import Type from './components/Type';
import './Home.css'
import lottie from 'lottie-web'
import About from './components/About';
import Skillset from './components/Skillset';
import Media from './components/Media';
import Projects from './components/Projects';

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
          
         </div>
      );
}
 
export default Home;