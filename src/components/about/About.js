import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <>
    <section className='bg-secondary text-primary py-[150px] max-lg:py-[80px]'>
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="about-us my-auto col-span-6 max-lg:col-span-12">
                    <span className='subtitle'>The sky, reimagined.</span>
                    <h1 className='title'>ROSIE: Where emotion takes flight.</h1>
                    <p className='paragraph'>Let ROSIE take you on a flight where Bali’s beauty unfolds endlessly before your eyes. Offering a seamless blend of elegance and adventure, ROSIE provides a luxurious way to explore the island's breathtaking landscapes and serene shores.</p>
                    <p className='paragraph'>From the ocean's tranquil embrace to Bali's lush hills, ROSIE marks the beginning of your intimate journey. Feel your emotions soar as the island reveals its finest views, turning every moment into something magical.</p>
                </div>
                <div className="col-span-6 max-lg:col-span-12 max-lg:mt-10">
                    {/* <Image src={'/img/heli/1.webp'} width={1080} height={1920} alt='Fly Rosie' /> */}
                    <img src="/img/heli/1.webp" alt="Fly Rosie" className='w-[440px] ml-auto max-lg:mx-auto max-lg:w-full' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
