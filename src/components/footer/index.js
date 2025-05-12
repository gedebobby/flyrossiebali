import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";


export const Footer = () => {
  return (
    <>
    <footer className='bg-primary text-secondary pt-[60px]'>
        <div className="container">
            <div className="grid grid-cols-12 max-sm:grid-cols-3 max-sm:gap-y-[50px]">
                <div className="col-span-5">
                    <Image src={'/img/logo/logo.webp'} width={250} height={130} alt='Logo' priority />
                </div>
                <div className="col-span-3">
                    <div className='footer-widget-title'>
                        Social Media
                    </div>
                    <ul className='flex gap-3'>
                        <li><Link href={'https://www.instagram.com/'}><FiInstagram size={30}/></Link></li>
                        <li><Link href={'https://www.instagram.com/'}><FaSquareFacebook  size={30}/></Link></li>
                        <li><Link href={'https://www.instagram.com/'}><FaTiktok  size={30}/></Link></li>
                        <li><Link href={'https://www.instagram.com/'}><FaYoutube  size={30}/></Link></li>
                    </ul>
                </div>
                <div className="col-span-4">
                    <div className='footer-widget-title'>
                        Contact
                    </div>
                    <ul className='widget-contact-list'>
                        <li><Link href={'https://www.instagram.com/'}>Jl. Gn. Tangkuban Perahu No.88A, Kerobokan Kelod, Kuta Utara, Badung Regency, Bali 80361</Link></li>
                        <li><Link href={'tel:+88015569569365'}>+62 361 9346082</Link></li>
                        <li><Link href={'mailto:info@flyrossiebali.com'}>info@flyrossiebali.com</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-secondary border-opacity-50 mt-[60px] py-[30px]">
                <div>© {new Date().getFullYear()} FlyRosie . All Rights Reserved.</div>
            </div>
        </div>
    </footer>
    </>
  )
}
