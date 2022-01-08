import React from 'react'
import './Loading.css'
import loadingImg from '../../assets/loading.png'

export default function Loading() {
  return (
    <div className='loading-flex'>
      <img className='loading-img rotation' src={loadingImg} alt='loading'/>
    </div>
  )
}
