import React from 'react';
import img from '../../images/srijani.jpeg';
import './about.css';

const About = () =>{
  return(
  		<div class="container about">
  		<h1 className="headings" style={{fontSize:"2.5em",marginBottom:"4%"}}>About Me</h1>
		  <div class="row rw-2">
		    <div class=" col-sm-12 col-md-6">
		      	<div class="conatiner abt-img" >
  					<img src={img} class="img-ab" alt="srijani" />
  				</div>
		    </div>
		    <div class="col-sm-12 col-md-6 colm1">
		      <h2 style={{marginBottom:"4%"}}>Srijani Sarkar</h2>
		      <p className="about-p">An enthusiastic fresher who is hard working and highly motivated and eager to learn new technologies and methodologies. Has the ability to work as  individual as well as in a group.
		        </p>
		        <a href="https://drive.google.com/file/d/13ApuVpCplEe4CLp4G26-RUnFysYPtyCW/view?usp=sharing"><button className="btn-1">Download CV</button></a>
		    </div>
		  </div>
		</div>
  	);
}
export default About;