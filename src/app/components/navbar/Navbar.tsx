"use client"

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import LogoImage from '../../assets/logo.webp'
import MenuButton from "../MenuButton";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function Navbar() {
    return (
        <nav className={`${inter.variable} font-sans text-neutral-900 font-medium`}>
            <ul className="flex items-center justify-between px-4 py-2">
                <li>
                    <Link href="/" className="flex gap-4 items-center">
                        <Image 
                            className="w-[70px] h-[50px]" 
                            priority={false} 
                            alt="logo_image" 
                            src={LogoImage} 
                        />
                        <p className="text-2xl font-bold">DeviComm</p>
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <div className="flex items-center gap-8 text-md font-[400] text-neutral-500">
                        <Link href="/about-us">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </li>
                <MenuButton />
            </ul>
        </nav>
    )
}

// "about us", "our services", "careers", "contact" 