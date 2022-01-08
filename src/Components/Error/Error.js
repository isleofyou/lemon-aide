import React from 'react'
import './Error.css'
import errorImg from '../../assets/errorbot.png'

export default function Error({ error }) {
  console.log(error);
  return (
    <div className='error-flex'>
      <img className='error-img' src={errorImg} alt='robot'/>
      <div className='error-text'>Whoops! </div>
      <div className='error-text'> <span className='error-color'>{error}</span></div>
    </div>
  )
}
