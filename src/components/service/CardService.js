import React from 'react';
import { SlDiamond } from "react-icons/sl";

export const CardService = () => {
  return (
    <>
    <div className="card bg-secondary p-[50px] text-center">
        <div className="top">
            <SlDiamond size={52} className='mx-auto'/>
        </div>
        <div className="middle py-[25px]">
            <h3 className='text-[25px]'>Luxury Lounge</h3>
        </div>
        <div className="bottom h-full max-h-[130px]">
            <p>Relax in our exclusive Luxury Lounge, offering comfort, premium amenities, and curated drinks before your flight.</p>
        </div>
    </div>
    </>
  )
}
