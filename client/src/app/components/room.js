'use client'
import { useState } from "react";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

export default function Room() {

    const [stream, setStream] = useState(null);

    const getMediaStream = async ()=>{
        try{

            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            })
            setStream(mediaStream);

        }catch(err){
            console.error('Error accessing media devices:', err);
        }
    }

    return (
        <>
        <button onClick= {getMediaStream}>Record</button>
        <ReactPlayer url={stream} width ="1280px" height ="720px" controls = {true} autoPlay={true} />

        </>
    )
}