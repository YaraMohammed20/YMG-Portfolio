import Hero from "../Hero/Hero"; 
import About from "../About/About"; 
import Skills from "../Skills/Skills"; 
import Projects from "../Projects/Projects"; 
import Contact from "../Contact/Contact"; 
import ScrollAnimation from "../Animations/ScrollAnimation";
import Experience from "../Experience/Experience";
import Certifications from "../Certifications/Certifications";

export default function Home() { 
  return ( 
    <> 
      <div id="home"> 
        <ScrollAnimation direction="up">
          <Hero />  
        </ScrollAnimation>
      </div> 
 
      <div id="about"> 
        <ScrollAnimation direction="left">
          <About /> 
        </ScrollAnimation>
      </div> 

       <div id="certifications"> 
        <ScrollAnimation direction="right">
          <Certifications/>
        </ScrollAnimation>
      </div> 
      
     <div id="experience"> 
        <ScrollAnimation direction="left">
          <Experience/>
        </ScrollAnimation>
      </div> 

      <div id="skills"> 
        <ScrollAnimation direction="right">
          <Skills /> 
        </ScrollAnimation>
      </div> 
 
      <div id="projects"> 
        <ScrollAnimation direction="up">
          <Projects /> 
        </ScrollAnimation>
      </div> 
 
      <div id="contact"> 
        <ScrollAnimation direction="right">
          <Contact /> 
        </ScrollAnimation>
      </div> 
    </> 
  ); 
}