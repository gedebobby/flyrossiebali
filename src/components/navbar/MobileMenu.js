import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaTimes } from "react-icons/fa";

export const MobileMenu = ({isMobile, setIsMobile}) => {
  return (
    <>
    <div className={`mobile-menu h-full ${isMobile ? 'opened' : ''}`}>
        <div className="text-right">
            <button onClick={() => setIsMobile(!isMobile)} className='text-[30px] text-secondary'>
                <FaTimes />
            </button>
        </div>
        <div className="pt-[20px] pb-[50px]">
            <Image src={'/img/logo/logo.webp'} className='mx-auto' width={150} height={100} alt='Logo' priority />
        </div>
        <div className="text-secondary uppercase">
            <ul>
                <li className='mobile-nav-link'><Link href={'#'}>Home</Link></li>
                <li className='mobile-nav-link'><Link href={'#'}>About</Link></li>
                <li className='mobile-nav-link'><Link href={'#'}>Packages</Link></li>
                <li className='mobile-nav-link'><Link href={'#'}>Service</Link></li>
                <li className='mobile-nav-link'><Link href={'#'}>Contact</Link></li>
            </ul>
        </div>
        <div className='pt-[25px]'>
            <button className='py-[15px] px-[20px] w-full border border-secondary text-secondary'>
                Book now
            </button>
        </div>  
    </div>
    <div className={`mobile-overlay ${isMobile ? 'opened' : ''}`}></div>
    </>
  )
}
