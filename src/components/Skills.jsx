import "devicon/devicon.min.css";

function Skills(){
    return(
      <section className="skills">
        <h1>My skills</h1>
        <div className="skill-container"> 
          <div className="skill">
            <i className="devicon-html5-plain colored"></i>
            <p>HTML5</p>
          </div>

         <div className="skill">
            <i className="devicon-css3-plain colored"></i>
            <p>CSS3</p>
          </div>

          <div className="skill">
            <i className="devicon-javascript-plain colored"></i>
            <p>JavaScript</p>
          </div>

          <div className="skill">
            <i className="devicon-c-plain colored"></i>
            <p>C</p>
          </div>

          <div className="skill">
            <i className="devicon-react-original colored"></i>
            <p>React</p>
          </div>

          <div className="skill">
            <i className="devicon-python-plain colored"></i>
            <p>Python</p>
          </div>

          <div className="skill">
            <i className="devicon-git-plain colored"></i>
            <p>Git</p>
          </div>

          <div className="skill">
            <i className="devicon-github-plain colored"></i>
            <p>Github</p>
          </div>

        </div>
      </section>
    );
}
export default Skills;