import developerImage from "../assets/developer.png";


function Hero(){
 return(
   <section className="hero">
     <div className="hero-content">
     <h1>Hi,I'm Jasmine.</h1>
     <h2>Aspiring Frontend | Software Developer.</h2>
     <p>I build responsive and user-friendly web application.</p>
    
     </div>
     <img src={developerImage} alt="Developer Illustration" />
      <a href="/Jasmine_Resume.pdf" download className="resume-btn">
      Download Resume
     </a>
     
   </section>
 );
}
export default Hero;
