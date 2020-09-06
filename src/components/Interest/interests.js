import React from 'react';
import webdev from '../../images/webdev.jpg';
import baking from '../../images/baking.jpg';
import camera from '../../images/camera.jpg';
import kathak from '../../images/kathak.jpg';
import ReactCardFlipper from "react-card-flipper";
import './interests.css';

const Interests = () =>{
  return(
  		<div className="container interest">
  			<div className	="row r1" >
  			<div class=" col-sm-12 col-md-6 col-lg-3 ">
		  			<ReactCardFlipper width="100%" behavior="hover" >
				        <div>
				          	<img src={webdev} alt="web" className="int-img" />
				        </div>
				        <div>
				        <h2>Web Development</h2>
				          <p>I think web development is fun and it is a way for me to showcase my creativity. It is so vast
				          that everyday you get to learn something new and it never gets boring, the more I experiment the more interesting it gets.
				          </p>
				        </div>
				     </ReactCardFlipper>
		     </div>
		     <div class=" col-sm-12 col-md-6  col-lg-3 ">
		  			<ReactCardFlipper width="100%" behavior="hover" >
				        <div>
				          	<img src={baking} alt="web" className="int-img" />
				        </div>
				        <div>
				        <h2>Baking</h2>
				          <p>Growing up, I used to love cakes.Baking is my hobby because, well, who doesn&apos;t love to eat? 
				          Especially desserts! I love to make cookies, cakes, muffins, pretty much every dessert, because just after that I get to eat it.
				          </p>
				        </div>
				     </ReactCardFlipper>
		     </div>
		     <div class=" col-sm-12 col-md-6  col-lg-3 ">
		  			<ReactCardFlipper width="100%" behavior="hover" >
				        <div>
				          	<img src={camera} alt="web" className="int-img" />
				        </div>
				        <div>
				        <h2>Photography</h2>
				          <p>Photography allows us to capture  events, times, and places and more than anything MEMORIES.
				           It has always been one of my favorite hobbies. When I take pictures, it’s like seeing things in a new perspective.
				          </p>
				        </div>
				     </ReactCardFlipper>
		     </div>
		     <div class=" col-sm-12 col-md-6  col-lg-3 ">
		  			<ReactCardFlipper width="100%" behavior="hover" >
				        <div>
				          	<img src={kathak} alt="web" className="int-img" />
				        </div>
				        <div>
				        <h2>Dance</h2>
				          <p>Well for me dancing is a way to stay fit and channel my energy and it gives me pleasure and peace .
				          I feel dance is a language in itself that speaks for all cultures and traditions. It is a way we can express ourselves.</p>
				        </div>
				     </ReactCardFlipper>
		     </div>
			 </div>
  		</div>
  	);
}
export default Interests;