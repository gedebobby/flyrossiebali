'use client';
import React, { useState } from 'react';
import {AccordionItem } from '../accordion/AccordionItem';
import accordionData from "../../data/accordionData.json";

export const AboutSecond = () => {
    const [isMission, setIsMission] = useState(true);
  return (
    <>
    <section className='bg-primary text-secondary'>
        <div className="grid grid-cols-12">
            <div className="col-span-6 max-lg:col-span-12 relative max-lg:h-[700px]">
                <div className="bg-1 transition-all duration-500 ease-in-out"></div>
            </div>
            <div className="col-span-6 max-lg:col-span-12">
                <div className="about-us p-[100px] max-lg:px-[50px] max-lg:pt-[80px]">
                    <span className='subtitle'>our benefit</span>
                    <h2 className='title'>First Lifestyle-branded Helicopter in Indonesia</h2>
                    <div className="accordion">
                {
                    accordionData.data?.map((data) => {
                        return (
                            <AccordionItem key={data.id} title={data.title} content={data.content}/>
                        )
                    })
                }
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-6 pt-[100px] px-[100px] pb-[100px] max-lg:col-span-12 max-lg:pt-0 max-lg:px-[50px] max-lg:pb-[80px]">
                <div className="about">
                    <span className='subtitle'>About Us</span>
                    <h2 className='title'>Our Business Boasts Top of The Line Services</h2>
                </div>
                <div className="flex mb-[30px]">
                    <button onClick={()=>setIsMission(true)} className={`btn-vision ${isMission ? 'active' : ''}`}>Our Mission</button>
                    <button onClick={()=>setIsMission(false)} className={`btn-mission ${!isMission ? 'active' : ''}`}>Our Vision</button>
                </div>
                <div className="paragraph">
                {isMission ? (
                    <p className=''>
                    To turn the skies of Bali into a canvas for personal stories, cinematic memories, and emotional luxury. ROSIE is not just a helicopter, it is a moment, a feeling, and a visual that marks a milestone. We believe that how you arrive matters as much as where you go, and through ROSIE, every journey becomes an unforgettable chapter of one’s life.
                    </p>
                ) : (
                    <p className='vision'>
                    Our goal is to transform every journey into a cherished memory, connecting dreams with reality. ROSIE delivers unforgettable experiences, filled with elegance and emotion.
                    </p>
                )
            }
                </div>
            </div>
            <div className="col-span-6 max-lg:col-span-12 relative max-lg:h-[700px]">
                <div className="bg-2"></div>
            </div>
        </div>
    </section>
    </>
  )
}
