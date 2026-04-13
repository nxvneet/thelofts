import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const footerRef = useRef(null);

    useEffect(() => {
        // Refresh ScrollTrigger to ensure calculations are correct for initial render and new routes
        setTimeout(() => ScrollTrigger.refresh(), 500);

        const ctx = gsap.context(() => {
            // Reveal text
            gsap.fromTo('.footer-large-text',
                { opacity: 0, y: 100 },
                {
                    opacity: 0.05,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.footer-large-wrap',
                        start: "top 95%",
                    }
                }
            );

            gsap.fromTo('.footer-content > div',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.footer-content',
                        start: "top 95%",
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, [pathname]);

    return (
        <footer ref={footerRef} className="w-full bg-[var(--color-surface)] relative overflow-hidden text-[var(--color-text-primary)]">

            {/* Colossal Text area */}
            <div className="footer-large-wrap border-y border-[var(--color-border-color)] py-16 md:py-24 text-center overflow-hidden relative">
                <h2 className="footer-large-text text-[15vw] leading-[0.8] tracking-tighter whitespace-nowrap text-black pointer-events-none uppercase font-heading">
                    THE LOFTS
                </h2>
            </div>

            <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 flex flex-col lg:flex-row justify-between footer-content">

                {/* Left Column */}
                <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
                    <p className="text-sm text-[var(--color-text-muted)] tracking-wider">© 2026</p>
                    <p className="text-sm text-[var(--color-text-muted)] tracking-wider mt-1 uppercase">THE LOFTS -<br />LA PLAGE SOUTH</p>
                </div>

                {/* Center CTA Stack */}
                <div className="w-full lg:w-[400px] flex flex-col mb-10 lg:mb-0 border border-transparent">
                    <button onClick={() => navigate('/contact')} className="w-full flex justify-between items-center bg-[var(--color-primary)] text-white p-6 border border-[var(--color-primary)] hover:bg-[#222] transition-colors group cursor-pointer text-left">
                        <span className="text-xs tracking-[0.12em] uppercase font-medium">SCHEDULE VIEWING</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => navigate('/residences')} className="w-full flex justify-between items-center bg-transparent border-x border-b border-[var(--color-border-color)] p-6 hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
                        <span className="text-xs tracking-[0.12em] uppercase font-medium text-[var(--color-text-primary)]">EXPLORE RESIDENCES</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => navigate('/contact')} className="w-full flex justify-between items-center bg-transparent border-x border-b border-[var(--color-border-color)] p-6 hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
                        <span className="text-xs tracking-[0.12em] uppercase font-medium text-[var(--color-text-primary)]">DOWNLOAD BROCHURE</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Right Details */}
                <div className="w-full lg:w-1/4 text-left lg:text-right">
                    <address className="not-italic text-sm text-[var(--color-text-muted)] mb-2">
                        89 Pearl Boulevard<br />
                        The Pearl, Doha, Qatar
                    </address>
                    <a href="tel:+97444913333" className="block text-sm text-[var(--color-text-muted)] mb-1 hover:text-[var(--color-text-primary)] transition-colors underline underline-offset-4">+974 44913333</a>
                    <a href="mailto:info@thelofts.qa" className="block text-sm text-[var(--color-text-muted)] mb-6 hover:text-[var(--color-text-primary)] transition-colors underline underline-offset-4">info@thelofts.qa</a>

                    <div className="flex gap-4 lg:justify-end text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-[var(--color-text-primary)] mb-6 font-medium">
                        <Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link>
                        <Link to="/residences" className="hover:text-[var(--color-accent)] transition-colors">Residences</Link>
                        <Link to="/amenities" className="hover:text-[var(--color-accent)] transition-colors">Amenities</Link>
                        <Link to="/investor" className="hover:text-[var(--color-accent)] transition-colors">Investor Relations</Link>
                    </div>

                    <div className="flex gap-6 lg:justify-end text-xs tracking-[0.12em] uppercase text-[var(--color-text-primary)]">
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Facebook</a>
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-8 border-t border-[var(--color-border-color)] flex flex-col md:flex-row justify-between text-[#888] text-[0.65rem] tracking-[0.15em] uppercase">
                <span>© THE LOFTS RESIDENCES | PRIVACY POLICY | COOKIES</span>
                <span className="mt-4 md:mt-0">DESIGNED EXCLUSIVELY</span>
            </div>
        </footer>
    );
}
