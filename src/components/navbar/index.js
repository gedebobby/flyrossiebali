'use client';
import useSticky from '@/hooks/useSticky';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const sticky  = useSticky();
  return (
    <>
    <nav className={`w-full h-[130px] z-10 ${sticky ? 'nav-sticky' : 'nav-transparent'}`}>
        <div className="container h-full">
            <div className="grid grid-cols-12 h-full items-center">
                <div className="col-span-2">
                    <Image src={'/img/logo/logo.webp'} width={130} height={130} alt='Logo' priority />
                </div>
                <div className="col-span-8">
                    <ul className='flex justify-around max-w-[700px] mx-auto items-center text-secondary uppercase tracking-[0.15em] max-lg:hidden'>
                        <li ><Link href={'#'}>Home</Link></li>
                        <li ><Link href={'#'}>About</Link></li>
                        <li ><Link href={'#'}>Packages</Link></li>
                        <li ><Link href={'#'}>Service</Link></li>
                        <li ><Link href={'#'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 ml-auto">
                    <button onClick={() => setIsMobile(!isMobile)} className='max-lg:block hidden text-[30px]'>
                        <FaBars className='text-secondary'/>
                    </button>
                    <button className='py-[15px] px-[20px] border border-secondary text-secondary max-lg:hidden hover:bg-secondary hover:text-primary'>
                        Book now
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <MobileMenu isMobile={isMobile} setIsMobile={setIsMobile}/>
    </>
  )
}
