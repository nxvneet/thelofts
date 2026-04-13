import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const units = [
    {
        title: "3 bedroom Loft Luxury residences",
        desc: "THIS CONTEMPORARY SPACE BLENDS MODERN ARCHITECTURE WITH NATURAL LIGHT. DESIGNED FOR CITY LIVING, IT FEATURES PREMIUM MATERIALS AND THOUGHTFUL LAYOUT.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/3BHK-lofts-1.jpg",
        location: "LOCATION: THE PEARL-QATAR",
        slug: "3-bhk-loft"
    },
    {
        title: "2 bedroom Loft Luxury residences",
        desc: "CHIC CONTEMPORARY DESIGN MARRYING WARM TONES WITH MARBLE ACCENTS, CREATING A SEAMLESS AND EXPANSIVE AESTHETIC FOR SOPHISTICATED LIVING.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/21-BHK-residences-7.jpg",
        location: "LOCATION: THE PEARL-QATAR",
        slug: "2-bhk-loft"
    },
    {
        title: "2 bedroom Luxury residences",
        desc: "SPACIOUS LAYOUT WITH SOPHISTICATED FINISHES. THE PERFECT BALANCE OF COMFORT AND LUXURY, OFFERING STUNNING VIEWS AND WORLD-CLASS AMENITIES.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/3.webp",
        location: "LOCATION: THE PEARL-QATAR",
        slug: "2-bhk"
    },
    {
        title: "1 bedroom Luxury residences",
        desc: "ELEGANT AND COZY. FEATURING HIGH-END FINISHES, WOODEN FLOORING, AND A HIGHLY EFFICIENT ARCHITECTURAL LAYOUT MAXIMIZING EVERY SQUARE METER.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/07/5_1.jpg",
        location: "LOCATION: THE PEARL-QATAR",
        slug: "1-bhk"
    },
    {
        title: "Luxury Studio Apartments",
        desc: "A SMART LAYOUT WITH SOPHISTICATED FURNISHINGS. THE PERFECT PIED-À-TERRE OFFERING A SEAMLESS BLEND OF LUXURY AND EVERYDAY CONVENIENCE.",
        image: "/studio_improved_1773830107563.png",
        location: "LOCATION: THE PEARL-QATAR",
        slug: "studio"
    }
];

export function StackedUnitScroll() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.stacked-unit-card');
            
            cards.forEach((card, i) => {
                // If not the first card, we animate its dark overlay and scale of the previous card
                if (i > 0) {
                    const prevCard = cards[i - 1];
                    const prevOverlay = prevCard.querySelector('.black-overlay');
                    const prevContent = prevCard.querySelector('.unit-content');
                    
                    // As this card scrolls up, darken the previous one and push it down slightly for parallax
                    gsap.to(prevOverlay, {
                        opacity: 0.7,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    });

                    gsap.to(prevContent, {
                        y: -50,
                        opacity: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top top",
                            scrub: true
                        }
                    });
                }
            });

            // Looping scroll indicator lines
            gsap.fromTo('.scroll-indicator-line',
                { yPercent: -100 },
                { yPercent: 200, duration: 2.5, ease: "power1.inOut", repeat: -1 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-black">
            {units.map((unit, index) => (
                <div 
                    key={index} 
                    className="stacked-unit-card sticky top-0 w-full h-screen origin-top flex flex-col items-center justify-center p-3 md:p-6"
                    style={{ 
                        zIndex: index + 1,
                    }}
                >
                    <div 
                        className="relative w-full h-full mx-auto overflow-hidden rounded-[20px] shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full z-0">
                            <img 
                                src={unit.image} 
                                alt={unit.title} 
                                className="w-full h-full object-cover object-center" 
                            />
                            {/* Gradient to darken top and bottom edges for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
                            
                            {/* Programmable black overlay for the scroll parallax effect */}
                            <div className="black-overlay absolute inset-0 bg-black opacity-0"></div>
                        </div>

                        {/* Content */}
                        <div className="unit-content relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-12">
                            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading text-white tracking-tight mb-8 text-center drop-shadow-lg">
                                {unit.title}
                            </h2>
                            
                            {/* Animated Vertical line indicator */}
                            <div className="relative w-[1px] h-16 md:h-20 bg-white/40 mb-10 overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                <div className="scroll-indicator-line absolute top-0 left-0 w-full h-1/2 bg-white drop-shadow-[0_0_5px_rgba(255,255,255,1)]"></div>
                            </div>
                            
                            <p className="text-white/90 text-[10px] md:text-xs tracking-[0.15em] lg:tracking-[0.2em] uppercase leading-[1.8] max-w-[500px] text-center font-medium drop-shadow-md">
                                {unit.desc}
                            </p>

                            <Link to={`/residences/${unit.slug}`} className="mt-14 inline-block">
                                <button className="bg-white text-black hover:scale-105 transition-transform duration-300 rounded-full px-8 py-4 flex items-center gap-3 text-sm font-semibold tracking-wide">
                                    Project Details <ArrowUpRight size={18} />
                                </button>
                            </Link>
                        </div>

                        {/* Location Footer */}
                        <div className="absolute bottom-6 md:bottom-8 left-0 w-full text-center z-10 unit-content">
                            <p className="text-white/60 text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold">
                                {unit.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
