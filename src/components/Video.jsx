import React from 'react'

const Video = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <video className="w-3/4 rounded-lg shadow-lg" autoPlay loop muted >
      <source src="./video/video.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default Video