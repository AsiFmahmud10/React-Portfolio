import './Contact.css';
import emailjs from 'emailjs-com';
import { ReactComponent as Email } from '../assets/e.svg'

require('dotenv').config()

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    //emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
    emailjs.sendForm('service_v24govz','template_37scnrm', e.target,'user_eMkvE4IHOjHNaVorg9TSo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="form">
               <form className="contact__form" onSubmit={sendEmail}>
                  <input type="hidden" name="contact_number" />
                  <input type="text" name="user_name" />
                  <input type="email" name="user_email" />
                  <textarea name="message" cols='15' />
                  <input type="submit" value="Send" />
               </form>
               
               <div className="contact__img">
                      <Email/>
                    
               </div>
    </div>

  );
}