function Contact(){
    return(
      
     <section>
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

          <div className="social-links">
            <a href="https://github.com/jasminenasar" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href= "https://www.linkedin.com/in/jasminenasar/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
       </div>
      </section>
    );
}
export default Contact;