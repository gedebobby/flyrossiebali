import Link from 'next/link'
import React from 'react'

export const AboutThird = () => {
  return (
    <section className='bg-secondary text-primary'>
        <div className="grid grid-cols-2 max-xl:grid-cols-1">
            <div className="relative max-xl:h-[400px] max-xl:bg-fixed">
                <div className="bg-3"></div>
            </div>
            <div className="pt-[100px] px-[100px] max-lg:px-[50px] pb-[100px]">
                <div className="about">
                    <h2 className='title'>Enhance Your Experience with Our Luxury Flight</h2>
                </div>
                <div className="paragraph pb-20">
                    <p className=''>
                    From once-in-a-lifetime love stories to sensory elegance in the sky, every journey is crafted with intention, intimacy, and imagination. This isn’t just luxury — it’s personal. ROSIE doesn’t just take you higher; she changes how you see the world, and your place in it. Ready to elevate your moment? Choose your experience. Let ROSIE take you there.
                    </p>
                </div>
                <div className="bottom">
                    <Link href={'#'} className='py-[15px] px-[20px] border bg-primary text-secondary hover:bg-secondary hover:border-primary hover:text-primary'>BOOK NOW</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
