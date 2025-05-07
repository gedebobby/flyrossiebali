import React from 'react'

export const Hero = () => {
  return (
    <section id="home">
      <div className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* <img src="/assets/img/heli/7.webp" alt="" style={{height: '100dvh', width: '100%', objectFit: 'cover'}}/> */}
        <video
          autoPlay
          muted
          loop
          control="false"
          preload="metadata"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        >
          <source
            // src={`/assets/video/heli3.mov`}
            src={`/video/heli6.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
