import React from 'react'
import { CardService } from './CardService'
import { SlDiamond } from "react-icons/sl";
import { GiHelicopter } from "react-icons/gi";

export const Service = () => {
  return (
    <>
    <section className='bg-primary text-secondary py-[150px] max-lg:py-[80px]'>
        <div className="container">
            <div className="text-center mb-[50px]">
                <h2 className='title'>Explore Our Services</h2>
            </div>
            <div className="services">
                <div className="grid grid-cols-4 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm: gap-5 text-primary">

                    <div className="card bg-secondary py-[50px] px-[30px] max-xl:py-[80px] max-xl:px-[60px] w-full max-lg:max-w-[500px] max-lg:mx-auto text-center">
                        <div className="top">
                            <SlDiamond size={52} className='mx-auto'/>
                        </div>
                        <div className="middle py-[25px] h-full max-h-[130px] flex items-center justify-center">
                            <h3 className='text-[25px] font-semibold max-xl:text-[40px]'>Luxury <br /> Lounge</h3>
                        </div>
                        <div className="bottom h-full max-h-[130px] flex items-center justify-center">
                            <p className=''>Relax in our exclusive Luxury Lounge, offering comfort, premium amenities, and curated drinks before your flight.</p>
                        </div>
                    </div>
                    <div className="card bg-secondary py-[50px] px-[30px] max-xl:py-[80px] max-xl:px-[60px] w-full max-lg:max-w-[500px] max-lg:mx-auto text-center">
                        <div className="top">
                            <SlDiamond size={52} className='mx-auto'/>
                        </div>
                        <div className="middle py-[25px] h-full max-h-[130px] flex items-center justify-center">
                            <h3 className='text-[25px] font-semibold max-xl:text-[40px]'>Luxury <br /> Lounge</h3>
                        </div>
                        <div className="bottom h-full max-h-[130px] flex items-center justify-center">
                            <p className=''>Relax in our exclusive Luxury Lounge, offering comfort, premium amenities, and curated drinks before your flight.</p>
                        </div>
                    </div>
                    <div className="card bg-secondary py-[50px] px-[30px] max-xl:py-[80px] max-xl:px-[60px] w-full max-lg:max-w-[500px] max-lg:mx-auto text-center">
                        <div className="top">
                            <SlDiamond size={52} className='mx-auto'/>
                        </div>
                        <div className="middle py-[25px] h-full max-h-[130px] flex items-center justify-center">
                            <h3 className='text-[25px] font-semibold max-xl:text-[40px]'>Luxury <br /> Lounge</h3>
                        </div>
                        <div className="bottom h-full max-h-[130px] flex items-center justify-center">
                            <p className=''>Relax in our exclusive Luxury Lounge, offering comfort, premium amenities, and curated drinks before your flight.</p>
                        </div>
                    </div>
                    <div className="card bg-secondary py-[50px] px-[30px] max-xl:py-[80px] max-xl:px-[60px] w-full max-lg:max-w-[500px] max-lg:mx-auto text-center">
                        <div className="top">
                            <SlDiamond size={52} className='mx-auto'/>
                        </div>
                        <div className="middle py-[25px] h-full max-h-[130px] flex items-center justify-center">
                            <h3 className='text-[25px] font-semibold max-xl:text-[40px]'>Luxury <br /> Lounge</h3>
                        </div>
                        <div className="bottom h-full max-h-[130px] flex items-center justify-center">
                            <p className=''>Relax in our exclusive Luxury Lounge, offering comfort, premium amenities, and curated drinks before your flight.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    </>
  )
}
