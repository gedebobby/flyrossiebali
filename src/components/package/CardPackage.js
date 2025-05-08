import React from 'react';
import { GoTrophy } from "react-icons/go";

export const CardPackage = ({price, title, desc}) => {
  return (
    <>
    <div className='border border-primary px-[50px] py-[40px] max-sm:px-[20px] max-sm:py-[20px]'>
        <div className="flex justify-between mb-[30px] max-sm:mb-4">
            <span className='text-[15px] font-semibold'>SIGNATURE PACKAGE</span>
            <GoTrophy size={15}/>
        </div>
        <div className="middle w-full pb-[50px]">
            <p className='text-[60px] pb-10 max-sm:pb-2'>{price}</p>
            <h3 className='text-[23px] font-semibold pb-2'>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className="bottom">
            <button className='py-[15px] px-[20px] border border-primary w-full'>BOOK NOW</button>
        </div>
    </div>
    </>
  )
}
