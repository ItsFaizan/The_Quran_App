import React from 'react'
import myVideo from '../assets/video (2160p).mp4';
export const Video = () => {
  return (
    <div>
      <video className="w-full" autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  )
}
