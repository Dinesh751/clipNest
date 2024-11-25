"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});



export default function Player() {
    return (

     <div className="center-div">
       <ReactPlayer url='https://www.youtube.com/watch?v=aXhDkAhgoCM' width ="1280px" height ="720px" controls = {true} />
     </div>
     
    );
  }
  