import React from 'react'
import './Walk.css'
// import React, { Component } from "react";
import Trailer from '../Video/Trailer.mp4';

// import { Player } from 'video-react';
const Walk = () => {
  return (
    <div className='walk'>
        <p id='heading hui'>Walkthrough</p>
        <div className='box-1'></div>

        <div className='video-box'>
        <video width={1078} height={501} src={Trailer} autoplay="false" controls="controls" />
        </div>
       
        <div className='box-2'></div>
        </div>
  )
}

export default Walk;