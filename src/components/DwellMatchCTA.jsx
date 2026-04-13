import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function DwellMatchCTA() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // trigger when section is 20% in view
                }
            });

            // Staggered text slide up
            tl.fromTo('.cta-text-anim', 
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.15 }
            );

            // Images slide up and scale
            tl.fromTo('.cta-img-col',
                { y: 100, scale: 0.9, opacity: 0 },
                { y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.1 },
                "-=0.8" // overlap with text animation
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const images = [
        "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/NORTH-WEST-VIEW-scaled.jpg",
        "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/3BHK-lofts-1.jpg",
        "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/21-BHK-residences-7.jpg",
        "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/VIEW-4-scaled.webp"
    ];

    return (
        <section ref={containerRef} className="w-full bg-black text-white pt-24 md:pt-40 overflow-hidden relative">
            
            {/* Dashed background subtle overlay (mimicking the vector backdrop) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full border border-dashed border-white opacity-50 absolute"></div>
                <div className="w-[1200px] h-[1200px] rounded-full border border-dashed border-white opacity-30 absolute"></div>
            </div>

            <div className="max-w-[1400px] mx-auto text-center px-5 lg:px-12 flex flex-col items-center relative z-10 w-full mb-16 md:mb-32">
                
                {/* Mouse Icon */}
                <div className="mb-12 flex flex-col items-center opacity-70">
                    <div className="w-[30px] h-[46px] border-2 border-white rounded-[20px] relative flex justify-center pt-[6px]">
                        <div className="w-[4px] h-[8px] bg-white rounded-full animate-bounce"></div>
                    </div>
                </div>

                <div className="overflow-hidden pb-4">
                    <h2 className="cta-text-anim text-4xl md:text-5xl lg:text-6xl font-heading text-white font-normal tracking-tight">
                        Interested in Property?
                    </h2>
                </div>
                <div className="overflow-hidden pb-8 mt-2 md:mt-4">
                    <Link to="/contact" className="cta-text-anim inline-block group text-5xl md:text-7xl lg:text-[7.5rem] font-heading font-normal text-[#8D8D8D] hover:text-white transition-colors duration-[1s] ease-out tracking-tight leading-[1.1]">
                        Call Us Right Now!
                    </Link>
                </div>
            </div>

            {/* 4-column edge-to-edge mosaic */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 h-[50vh] md:h-[70vh] relative z-10">
                {images.map((src, idx) => (
                    <div key={idx} className="cta-img-col w-full h-full overflow-hidden origin-bottom">
                        <img 
                            src={src} 
                            alt={`Luxury interior ${idx + 1}`} 
                            className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
