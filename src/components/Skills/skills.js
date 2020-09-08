import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import Tilt from 'react-tilt';
import './skills.css';

const Skills = () =>{
	return(
	  <div>
		<div class="container skills">
		  <div class="row">
		    <div class=" col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
				<div class="card sk ">
				  <div class="card-body">
				    <h3 class="card-title sk-card">C++</h3>
				    <ProgressBar className="prog"
					    progress={80}
					    radius={100}
					    strokeColor={"#073b74"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">80%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		    <div class="col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">C</h3>
				    <ProgressBar className="prog"
					    progress={80}
					    radius={100}
					    strokeColor={"#08053b"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">80%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		  </div>
		  <div class="col-sm-12 col-md-6 col-lg-4 col-sk">
		  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">Java</h3>
				    <ProgressBar className="prog"
					    progress={65}
					    radius={100}
					    strokeColor={"#1575e8"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">65%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		    <div class=" col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
				<div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">HTML/CSS</h3>
				    
				    <ProgressBar className="prog"
					    progress={90}
					    radius={100}
					    strokeColor={"#5b64e3"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">90%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		    <div class="col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">Bootstrap</h3>
				    <ProgressBar className="prog"
					    progress={90}
					    radius={100}
					    strokeColor={"#231e75"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">90%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		  </div>
		  <div class="col-sm-12 col-md-6 col-lg-4 col-sk">
		  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">React Js</h3>
				    <ProgressBar className="prog"
					    progress={70}
					    radius={100}
					    strokeColor={"#08053b"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">70%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		    <div class=" col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
				<div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">Oracle SQL</h3>
				    
				    <ProgressBar className="prog"
					    progress={75}
					    radius={100}
					    strokeColor={"#1575e8"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">75%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		    <div class="col-sm-12 col-md-6 col-lg-4 col-sk">
		    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">PostgreSQL</h3>
				    <ProgressBar className="prog"
					    progress={70}
					    radius={100}
					    strokeColor={"#08053b"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">70%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		  </div>
		  <div class="col-sm-12 col-md-12 col-lg-4 col-custm col-sk">
		  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} >
		      <div class="card sk">
				  <div class="card-body">
				    <h3 class="card-title sk-card">Node.js</h3>
				    <ProgressBar className="prog"
					    progress={60}
					    radius={100}
					    strokeColor={"#073b74"}
					    trackStrokeColor={"white"}
					>
					<div className="indicator">
		                <div className="score">60%</div>
		            </div>
		            </ProgressBar>
				  </div>
				</div>
				</Tilt>
		    </div>
		 
		   </div>

		</div>
		<div className="cont3" style={{paddingTop:"1%"}}>
          <h2 className="headings" style={{marginBottom:"2%"}}>Also familiar with:</h2>
          <ul className="also">
            <li className="also-li"><h4>JavaScript</h4></li>
            <li className="also-li"><h4>Python</h4></li>
            <li className="also-li1"><h4>Git</h4></li>
            
          </ul>
      </div>
      </div>
	);
}
export default Skills;