import React from 'react'
import { CardPackage } from './CardPackage';
import packageData from "@/data/packageData.json";

export const Package = () => {
  return (
    <section className='text-primary bg-secondary py-[150px] max-lg:py-[80px]'>
        <div className="container">
            <div className="text-center mb-[50px]">
                <span className='subtitle'>PRICE & PLAN</span>
                <h2 className='title'>Choose Our Packages</h2>
                <p className=''>Our signature packages are designed to turn your most meaningful occasions into unforgettable stories written across the sky.</p>
            </div>
            <div className="packages">
                <div className="grid grid-cols-2 max-xl:grid-cols-2 max-xl:gap-y-[30px] max-lg:grid-cols-1 max-lg:w-full max-lg:max-w-[500px] gap-5 mx-auto">
            {
                packageData.data.map((data) => {
                    return (
                        <CardPackage
                            key={data.id}
                            price={data.price}
                            title={data.title}
                            desc={data.desc} 
                        />
                    )
                })
            }
                </div>
            </div>
        </div>
    </section>
  )
}
