import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import cat from '../../assets/cat.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
              <div className='contact-info'>
                <h4>Ivonne Hernandez</h4>
                <a className='linked-in-icon' href={'https://www.linkedin.com/in/ivonne-hernandez-107b0324/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                <a className='contact-icons' href={'https://github.com/ivonne-hernandez'} target={'blank'}><img className='cat' alt='Ivonne octocat' src={cat}/></a>
              </div>
              <div className='contact-info'>
                <h4>David Tran</h4>
                <a className='linked-in-icon' href={'https://www.linkedin.com/in/david-tran7/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                <a className='contact-icons' href={'https://github.com/isleofyou'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
              </div>
              <div className='contact-info'>
                <h4>Markus Rossio</h4>
                <a className='linked-in-icon' href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                <a className='contact-icons' href={'https://github.com/Markus-Xavier'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
              </div>
          </div>
        </div>
      </div>
      <section className='application-name'>
        <div className='application-name-wrap'>
          <small className='copyright'>Lemon Aide © 2022</small>
        </div>
      </section>
    </div>
  )
};

export default Footer;
