import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const units = [
    {
        title: "3 Bedroom Loft Luxury Residences",
        size: "403 - 423 SQM",
        desc: "The pinnacle of coastal living. Expansive double-height ceilings, panoramic sea views, and absolute privacy.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/3BHK-lofts-1.jpg",
        features: ["Private Terrace", "Maid's Room", "Panoramic Sea View"]
    },
    {
        title: "2 Bedroom Loft Luxury Residences",
        size: "207 - 228 SQM",
        desc: "Chic contemporary design marrying warm tones with marble accents, creating a seamless and expansive aesthetic.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/21-BHK-residences-7.jpg",
        features: ["Corner Layouts", "Designer Kitchen", "En-suite Bathrooms"]
    },
    {
        title: "2 Bedroom Loft Residences",
        size: "195 - 208 SQM",
        desc: "Bright natural light floods this open plan sanctuary, designed for sophisticated modern living and entertaining.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/21-BHK-residences-1.jpg",
        features: ["Open Plan", "Balcony", "Built-in Wardrobes"]
    },
    {
        title: "1 Bedroom Residences",
        size: "110 - 130 SQM",
        desc: "Elegant and cozy. Featuring high-end finishes, wooden flooring, and a highly efficient architectural layout.",
        image: "https://ariaholding.com/thelofts/wp-content/uploads/2025/07/5_1.jpg",
        features: ["Premium Finishes", "Smart Layout", "City/Marina Views"]
    },
    {
        title: "Luxury Studio Apartments",
        size: "70 - 90 SQM",
        desc: "A smart layout with sophisticated furnishings. The perfect pied-à-terre offering a seamless blend of luxury and convenience.",
        image: "/studio_improved_1773830107563.png",
        features: ["Fully Furnished", "Floor-to-Ceiling Windows", "High Yield"]
    }
];

export function HorizontalUnitScroll() {
    const componentRef = useRef(null);
    const sliderRef = useRef(null);
    const [expandedImage, setExpandedImage] = useState(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".unit-panel");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: componentRef.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (panels.length - 1),
                        duration: { min: 0.2, max: 0.8 },
                        ease: "power2.inOut"
                    },
                    end: () => "+=" + sliderRef.current.offsetWidth,
                }
            });

            // Reveal animations for each panel's content
            panels.forEach((panel, i) => {
                // Create a child scrollTrigger for subtle inner-parallax/reveal while snapping
                gsap.fromTo(panel.querySelector('.unit-content'),
                    { autoAlpha: 0, x: 50 },
                    {
                        autoAlpha: 1, x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: gsap.getById("horizontal"), // If we used an ID, but let's just use Intersection observer or simple scrub
                            start: "left center",
                            end: "center center",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={componentRef} className="w-full h-screen bg-[var(--color-primary)] overflow-hidden relative text-white">

            {/* Intro Header overlaying the scroll section slightly */}
            <div className="absolute top-[120px] left-0 w-full z-20 pointer-events-none px-5 lg:px-12">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="text-[3rem] md:text-[4.5rem] font-heading tracking-tight mb-2 text-white drop-shadow-lg leading-[1.1]">Unit Types</h2>
                    <p className="text-white/80 text-sm tracking-wide uppercase font-medium drop-shadow-md">Scroll to Discover</p>
                </div>
            </div>

            {/* Horizontal Slider Track */}
            <div ref={sliderRef} className="flex h-full w-[500vw]">
                {units.map((unit, index) => (
                    <div key={index} className="unit-panel w-[100vw] h-full flex flex-col md:flex-row items-center justify-center relative p-5 lg:p-12 overflow-hidden">

                        {/* Background Image with slight darkening */}
                        <div className="absolute inset-0 w-full h-full z-0">
                            <img src={unit.image} alt={unit.title} className="w-full h-full object-cover transform origin-center" style={{ filter: "brightness(1.1) contrast(1.02) saturate(1.05)" }} />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:to-black/10" />
                        </div>

                        {/* Main Content Info */}
                        <div className="unit-content relative z-10 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row justify-start items-center h-full pt-32 pb-20">
                            <div className="w-full md:w-1/2 flex flex-col justify-center mt-32 md:mt-40 xl:mt-32">
                                <div className="text-[var(--color-accent)] font-semibold text-xs tracking-[0.2em] mb-4 uppercase drop-shadow-md">{String(index + 1).padStart(2, '0')} / {String(units.length).padStart(2, '0')}</div>
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-[1.1] text-white drop-shadow-lg">{unit.title}</h3>
                                <div className="text-xl md:text-2xl font-light italic mb-6 text-white/90 drop-shadow-md">{unit.size}</div>
                                <p className="text-white/80 text-lg md:text-xl max-w-[500px] mb-10 leading-relaxed drop-shadow-md">
                                    {unit.desc}
                                </p>

                                {/* Features List */}
                                <ul className="flex flex-col gap-3 mb-10">
                                    {unit.features.map((feat, i) => (
                                        <li key={i} className="flex items-center text-sm md:text-base uppercase tracking-wider text-white/80">
                                            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-4 inline-block"></span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild variant="outline" className="w-[80vw] md:w-fit h-14 px-8 border-white/30 hover:bg-white hover:text-black hover:border-white transition-colors uppercase tracking-[0.15em] text-xs font-semibold rounded-[4px] mt-4">
                                    <Link to="/availability">Check Availability <ArrowRight size={16} className="ml-3 inline-block" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Expand Button for Quality Image */}
                        <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-end p-12">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setExpandedImage(unit.image); }}
                                className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white backdrop-blur-md p-4 rounded-full border border-white/20 transition-all duration-300 group hover:scale-105"
                                title="View High-Res Image"
                            >
                                <Maximize2 size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </section>

            {/* Modal / Lightbox (Rendered entirely outside the section to prevent GSAP overlapping issues) */}
            {expandedImage && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm" onClick={() => setExpandedImage(null)}>
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 z-[10000]"
                        onClick={() => setExpandedImage(null)}
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                    <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={expandedImage} 
                            alt="Expanded High Quality View" 
                            className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[8px]" 
                            style={{ filter: "contrast(1.05) saturate(1.05)" }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
