import React from 'react';
import './Error.css';
import errorImg from '../../assets/errorbot.png';

export default function Error({ error }) {
  return (
    <div className='error-container'>
      <img className='error-img' src={errorImg} alt='robot'/>
      <div className='error-text'>Whoops! </div>
      <div className='error-message'> <span className='error-color'>{error}</span></div>
    </div>
  )
}