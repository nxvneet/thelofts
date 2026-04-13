import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { gsap } from 'gsap';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initial animation
        gsap.fromTo(".nav-container",
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDarkBg = (location.pathname === '/' || location.pathname === '/investor') && scrolled === false;

    return (
        <nav className={cn(
            "nav-container fixed top-0 w-full z-50 transition-all duration-500 flex items-center h-[80px]",
            scrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm text-primary py-0"
                : isDarkBg ? "bg-transparent text-white py-4" : "bg-transparent text-primary py-4",
            "px-5 lg:px-8 border-b border-transparent",
            scrolled ? "border-b-[var(--color-border-color)]" : ""
        )}>
            <div className="w-full max-w-[1280px] mx-auto flex lg:grid lg:grid-cols-[1fr_auto_1fr] justify-between items-center text-[11px] xl:text-[13px] font-medium tracking-[0.12em] uppercase gap-4 lg:gap-8">

                {/* Left Links */}
                <div className="hidden lg:flex gap-6 xl:gap-10 justify-end items-center min-w-0 w-full">
                    <Link to="/residences" className="hover:text-[var(--color-accent)] transition-colors">Residences</Link>
                    <Link to="/amenities" className="hover:text-[var(--color-accent)] transition-colors">Amenities</Link>
                    <Link to="/gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
                    <Link to="/investor" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">Investor Relations</Link>
                </div>

                {/* Center Logo */}
                <div className="flex flex-col items-center flex-shrink-0 text-center px-4 xl:px-8">
                    <Link to="/" className="flex flex-col items-center group">
                        <span className="font-heading text-[1.4rem] md:text-[1.8rem] tracking-widest leading-none group-hover:text-[var(--color-accent)] transition-colors">THE LOFTS</span>
                        <span className="flex items-center justify-center gap-3 text-[0.55rem] tracking-[0.2em] opacity-70 mt-2 transition-opacity">
                            <span className="w-8 xl:w-12 h-[1px] bg-current opacity-50"></span>
                            <span>LA PLAGE SOUTH</span>
                            <span className="w-8 xl:w-12 h-[1px] bg-current opacity-50"></span>
                        </span>
                    </Link>
                </div>

                {/* Right Links */}
                <div className="hidden lg:flex gap-6 xl:gap-10 justify-start items-center min-w-0 w-full">
                    <Link to="/availability" className="hover:text-[var(--color-accent)] transition-colors">Availability</Link>
                    <Link to="/location" className="hover:text-[var(--color-accent)] transition-colors">Location</Link>
                    <Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link>
                </div>

                {/* Mobile menu icon (Placeholder) */}
                <div className="lg:hidden flex justify-end">
                    <button className="text-current tracking-widest uppercase text-xs p-2">Menu</button>
                </div>

            </div>
        </nav>
    );
}
