import {useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact(){

   const form = useRef();

      const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
          .sendForm(
            "service_zi55xsf",
            "template_zwnm9je",
            form.current,
            {
              publicKey:"k4lRODO1JK4HNNvFP",
            }
          )
          .then(() =>{
            alert("Message sent successfully!");
            form.current.reset();
          })
          .catch((error)=>{
            alert("Failed to send message.");
            console.log(error);
          });
      };

    return(

     
      
     <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <p>
        I'm open to opportunities, internships, and software development roles.
        Feel free to get in touch with me.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          
          <h3>Let's Connect</h3>

          <p>
            <strong>Email:</strong> jasminenasar15@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 9677692375
          </p>

          <p>
            <strong>Location:</strong> Tamil Nadu, India
          </p>

         
        </div>
         <div className="social-links">
            <a href="https://github.com/jasminenasar" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href= "https://www.linkedin.com/in/jasminenasar/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            
          </div>
       
        <form  ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required/>
          <input type="text" name="subject" placeholder="Subject" required/>
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        

       </div>
      </section>
    );
}
export default Contact;