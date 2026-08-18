import weatherImage from "../assets/weather-img.png";
import kanbanImage from "../assets/kanban-img.png";
import blossomImage from "../assets/blossom-img.png";



function Projects(){
   return(
     <section className="projects">
        <h1>My Projects</h1>
        <div className="project-container">
        <div className="project-card">
          <div className="project-content">
         <h2>1.Student Management System</h2>
          <p><strong>Technology:</strong><i>C, File Handling</i></p>
          <p>Developed a Student Management System that allows users to add,view,search,update and delete student records.</p>
          <h3>Key Features</h3>
          <ul>
              <li>Add Student</li>
              <li>View Student</li>
              <li>Search Stduent</li>
              <li>Update Student</li>
              <li>Delete Student</li>
          </ul>

          <button>Github</button>
          <button>Live Demo</button>

          </div>
          
          <div className="pro-img">
          <img src={blossomImage} alt="blossom-page-image" />
          </div>
         </div>

        
         <div className="project-card">
           <div className="project-content">
         <h2> 2.Weather Dashboard</h2>
         
          <p><strong>Technology:</strong><i>React,HTML,CSS,JavaScript,Weather API</i></p>
          <p>Developed a responsive weather dashboard that displays real-time weather information for different cities using a weather API.</p>
          <h3>Key Features</h3>
          <ul>
              <li>Search Weather by city</li>
              <li>Display real-time weather information</li>
              <li>Search Stduent</li>
              <li>Update Student</li>
              <li>Delete Student</li>
              
          </ul>
           <button>Github</button>
          <button>Live Demo</button>

          </div>
         
          <div className="pro-img">
          <img src={weatherImage} alt="weather-app image" />
          </div>
         </div>

         <div className="project-card">
           <div className="project-content">
          <h2>3.Kanban Task Manager</h2>
         
          <p><strong>Technology:</strong><i>React,HTML,CSS,JavaScript</i></p>
          <p>Developed a Kanban Task Manager to organize and manage tasks efficiently using an interactive board interface.</p>
          <h3>Key Features</h3>
          <ul>
               
               <li>Create tasks</li>
               <li>Update task status</li>
               <li>Organize workflow</li>
               <li>Responsive design</li>
          </ul>
           <button>Github</button>
          <button>Live Demo</button>

          </div>
         
          <div className="pro-img">
           <img src={kanbanImage} alt="kanban-app-img" />
          </div>
          </div>
        
        
         
          <div className="project-card">
             
          <div className="project-content">
            <h2>4.Blossom Bridal Henna Website</h2>
           
         
         
          <p><strong>Technology:</strong><i>HTML,CSS,JavaScript</i></p>
          <p>Designed and Developed a responsive website for a bridal henna business to showcase services,gallery,and contact information.</p>
          <h3>Key Features</h3>
          <ul>
               
               <li>Responsive website design</li>
               <li>Service information</li>
               <li>Image gallery</li>
               <li>Contact section</li>
          </ul>
           <button>Github</button>
          <button>Live Demo</button>
          </div>
          <div className="pro-img">
           <img src={blossomImage} alt="blossom-page-image" />
          </div>
          
          </div>
        </div>

          <p className="last-para"><i>These projects showcase my practical experience in software development,web development and problem solving using C,HTML,CSS,JavaScript and React.</i></p>

     </section>
   );
}
export default Projects;