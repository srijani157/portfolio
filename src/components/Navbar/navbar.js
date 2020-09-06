import React from 'react';
import { Link } from 'react-scroll'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './navb.css';

class Navbar extends React.Component {
   state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return(
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link className="nav-link" activeClass=" nav-link" to="home" spy={true} smooth={true} offset={0} duration={500} >
             Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" activeClass=" nav-link" to="about" spy={true} smooth={true} offset={0} duration={500} >
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" activeClass=" nav-link" to="education" spy={true} smooth={true} offset={0} duration={500} >
            Education
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" activeClass=" nav-link" to="skills" spy={true} smooth={true} offset={0} duration={500} >
            Skills
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" activeClass=" nav-link" to="interests" spy={true} smooth={true} offset={0} duration={500} >
            Interests
          </Link>
        </li>
        <li class="nav-item">
          <div className="nav-link" activeClass=" nav-link" onClick={this.onOpenModal} >
            Contact Details
          </div>
          <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Contact Details</h2>
          <p className="contact-detail">Email id: srijani157@gmail.com</p>
          <p className="contact-detail">Phone : 7980058851/9874991406 </p>
        </Modal>
        </li>
      </ul>
      <a href="https://www.facebook.com/srijani.sarkar">
        <span class="navbar-text">
          Facebook 
        </span>
      </a>
      <span class="navbar-text divider">
          |
      </span>
      <a href="https://www.linkedin.com/in/srijani-sarkar-66963a1a6/">
        <span class="navbar-text">
           LinkedIn
        </span>
      </a>
    </div>
  </nav>
      );
  }
}
export default Navbar;