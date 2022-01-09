import React from 'react';
import './Error.css';
import errorImg from '../../assets/errorbot.png';

export default function Error({ error }) {
  return (
    <div className='error-container'>
      <img className='error-img' src={errorImg} alt='robot'/>
      <p className='error-text'>Whoops! </p>
      <p className='error-message'> <span className='error-color'>{error}</span></p>
    </div>
  )
}