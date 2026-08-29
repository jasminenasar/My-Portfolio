import {useState} from "react";

function Navbar(){
  const[menuOpen, setMenuOpen] = useState(false);
 return(
   <nav>
     <h2><a href="#">JASMINE</a></h2>
     <button className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>≡</button>
     
     <ul className={menuOpen?"active":""}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
   </nav>
 );
}
export default Navbar;