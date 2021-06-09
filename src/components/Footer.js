import './footer.css'
import image from '../assets/prt.jpg'
const Footer = () => {

    const personalInfo = {
         Name : 'Asif Mahmud',
         Email : 'mhamudasif1@gmail.com',
         University : 'Khulna university',
         Depertment : 'CSE'
    }

    return ( 
        <div className="footer">
                <div className="box">
                       <div className="box__img">
                                <img src={image} />
                       </div>
                        <div className='text' > 
                            {   Object.keys(personalInfo).map((key)=>(
                                     <p> {`${key} :  ${personalInfo[key]}`} </p>
                            ))

                            }
                                           
                        </div>
                </div>
        </div>
     );
}
 
export default Footer;