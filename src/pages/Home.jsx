import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { StackedUnitScroll } from '../components/StackedUnitScroll';
import { GlobalCTA } from '../components/GlobalCTA';
import { AboutProjectSection } from '../components/AboutProjectSection';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
    const heroImgRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax hero image
            gsap.to(heroImgRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Fade in text elements softly on load
            gsap.fromTo(".hero-text-reveal > *",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.4, stagger: 0.2, ease: "power3.out", delay: 2.8 }
            );
        });
        
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="hero-section relative w-full h-screen overflow-hidden flex flex-col bg-[var(--color-primary)] text-white px-5 lg:px-12 pt-[80px]">
                {/* Absolute Background Setup */}
                <div className="absolute inset-0 z-0">
                    <img
                        ref={heroImgRef}
                        src="/hero_view_1773123775976.png"
                        alt="The Lofts Luxury View"
                        className="w-full h-[115%] object-cover absolute top-[-5%]"
                    />
                    {/* Subtle gradient overtlay to match dark aesthetic but keep text readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </div>

                {/* Center Text block */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center hero-text-reveal -mt-20">
                    <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium mb-6 text-white/90">LA PLAGE SOUTH · THE PEARL-QATAR</p>
                    <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[1.1] font-heading font-normal text-white">
                        Waterfront <span className="italic">living</span>,<br />
                        <span className="font-semibold">redefined</span>
                    </h1>
                </div>

                {/* Bottom Elements */}
                <div className="relative z-10 w-full flex justify-between items-end pb-8 hero-text-reveal">
                    <div className="w-[150px] flex items-center gap-4 origin-left -rotate-90 translate-y-[-50px] text-[10px] tracking-[0.2em] uppercase text-white/70">
                        <span>SCROLL TO EXPLORE</span>
                        <div className="w-[40px] h-[1px] bg-white/70"></div>
                    </div>

                    <div className="w-full max-w-[320px] flex flex-col right-0 bottom-0 bg-white text-black divide-y divide-[#E3E0DC] cursor-pointer relative z-20 pointer-events-auto">
                        <Button 
                            variant="ghost" 
                            className="w-full h-[70px] justify-between rounded-none hover:bg-neutral-50 rounded-t-[4px]"
                            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                        >
                            <span className="text-[11px] tracking-[0.15em] font-semibold uppercase">SCHEDULE VIEWING</span>
                            <ArrowRight size={16} />
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full h-[70px] justify-between rounded-none hover:bg-neutral-800 hover:text-white bg-[var(--color-primary)] text-white transition-colors duration-500 rounded-b-[4px]"
                            onClick={(e) => { e.preventDefault(); navigate('/residences'); }}
                        >
                            <span className="text-[11px] tracking-[0.15em] font-semibold uppercase">EXPLORE RESIDENCES</span>
                            <ArrowRight size={16} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <AnimatedSection className="w-full bg-[var(--color-background-light)] pt-16 pb-16 md:pt-24 md:pb-24 px-5 lg:px-12 border-b border-[var(--color-border-color)]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-transparent lg:divide-[var(--color-border-color)] gap-y-12">
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-heading text-6xl md:text-8xl tracking-tighter text-[var(--color-primary)]">26</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-2 font-medium">FLOORS</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-heading text-6xl md:text-8xl tracking-tighter text-[var(--color-primary)]">120</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-2 font-medium">RESIDENCES</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-heading text-6xl md:text-8xl tracking-tighter text-[var(--color-primary)]">425</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-2 font-medium">SQ. FT. MAX</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-heading text-6xl md:text-8xl tracking-tighter text-[var(--color-primary)]">2029</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-2 font-medium">COMPLETION</span>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. ABOUT PROJECT OVERVIEW */}
            <AboutProjectSection />

            {/* 4. FEATURES SECTION */}
            <AnimatedSection className="w-full bg-[var(--color-background-light)] py-24 md:py-32 px-5 lg:px-12 border-t border-[var(--color-border-color)]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 gap-y-16">
                        <div className="flex flex-col">
                            <h3 className="font-heading italic text-2xl mb-4 text-[var(--color-text-primary)]">Prime Waterfront Location</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">On The Pearl Island</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-heading italic text-2xl mb-4 text-[var(--color-text-primary)]">Contemporary Architecture</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">And timeless interior finishes</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-heading italic text-2xl mb-4 text-[var(--color-text-primary)]">Curated Amenities</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">Including rooftop pool, wellness lounge, and co-working spaces</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-heading italic text-2xl mb-4 text-[var(--color-text-primary)]">Smart & Sustainable Living</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">With Integrated Technology</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-heading italic text-2xl mb-4 text-[var(--color-text-primary)]">Flexible Ownership</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">Residences available for sale and lease</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. UNIT TYPES STACKED HIGHLIGHT */}
            <StackedUnitScroll />

            {/* 6. GLOBAL CTA */}
            <GlobalCTA />
        </>
    );
}
