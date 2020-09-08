import React,{Component} from 'react';
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Timeline from './components/Timeline/timeline';
import Skills from './components/Skills/skills';
import Interests from './components/Interest/interests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className="parallax" id="home">
          <div className ="intro">
          <h1 style={{fontSize:"5em"}}>Hello!!</h1>
          <h3 style={{fontSize:"2.6em"}}>Scroll down to know about me..</h3>
          </div>
      </div>
      <div className="cont" id="about">
          <About/>
      </div>
      <div className="cont1" id="education">
          <h1 className="headings">Education and Work Experience</h1>
          <Timeline/>
      </div>
      <div className="cont2" id="skills">
          <h1 className="headings">Skills</h1>
          <Skills/>
      </div>
      <div className="cont4" id="interests">
          <h1 className="headings">Interests</h1>
          <Interests/>
      </div>
      
      <footer>
          <div class="footer">
            <h4 className="star"><FontAwesomeIcon icon={faStar} /></h4>
          </div>
      </footer>
      </div>
    );
  }
}

export default App;
