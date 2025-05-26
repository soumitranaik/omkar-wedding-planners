import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-red-800  shadow-sm" >
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8" id="footer-top">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/images/logo-white.png" width={100} height={70} alt="Omkar Wedding Planners Logo" />
                
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-100 sm:mb-0">
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
            
                <li>
                    <a href="#location" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-rose-50 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">© 2025 <a href="#" className="hover:underline">Omkar Events And Wedding Planners Fatorpa™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}



