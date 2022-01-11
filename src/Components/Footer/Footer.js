import React from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Lululemon_Athletica_logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Ivonne Hernandez</Link>
            <Link to='/'>David Tran</Link>
            <Link to='/'>Markus Rossio</Link>
          </div>
          <div class='footer-link-items'>
            <h2>LinkedIn</h2>
            <a href={'https://www.linkedin.com/in/ivonne-hernandez-107b0324/'} target={'blank'}>Ivonne</a>
            <a href={'https://www.linkedin.com/in/david-tran7/'} target={'blank'}>David</a>
            <a href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}>Markus</a>
          </div>
          <div class='footer-link-items'>
            <h2>Github</h2>
            <a href={'https://github.com/ivonne-hernandez'} target={'blank'}>Ivonne</a>
            <a href={'https://github.com/isleofyou'} target={'blank'}>David</a>
            <a href={'https://github.com/Markus-Xavier'} target={'blank'}>Markus</a>
          </div>
        </div>
      </div>
      <section class='application-name'>
        <div class='application-name-wrap'>
          <small class='copyright'>Lemon Aide © 2021</small>
        </div>
      </section>
    </div>
  )
};

export default Footer;
