import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutProjectSection() {
    const sectionRef = useRef(null);
    const textBlockRef = useRef(null);
    const imageRef = useRef(null);
    const innerImageRef = useRef(null);
    const anchorRef = useRef(null); // Static anchor for perfect mathematical expansion

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Headline entry
            gsap.from(".mayor-headline-line", {
                yPercent: 120, // deeper reveal
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",     
                    end: "+=150%", 
                    pin: true,
                    scrub: 1.2, 
                    invalidateOnRefresh: true
                }
            });

            tl.to(imageRef.current, {
                width: "100vw",
                height: "100vh",
                x: () => {
                    if(!anchorRef.current) return 0;
                    // The anchor stays completely static, so its bounds represent the start position perfectly!
                    const pr = anchorRef.current.getBoundingClientRect().right;
                    return window.innerWidth - pr;
                },
                y: () => {
                    if(!anchorRef.current) return 0;
                    const pb = anchorRef.current.getBoundingClientRect().bottom;
                    return window.innerHeight - pb;
                },
                borderRadius: "0px",
                ease: "power2.inOut" 
            }, 0);

            // Counteract scale on inner image slowly to simulate depth
            tl.to(innerImageRef.current, {
                scale: 1,
                ease: "power2.inOut"
            }, 0);

            // Fade out the text behind the image as it takes over
            tl.to(".text-lines-wrapper", {
                opacity: 0,
                scale: 0.95,
                ease: "power2.in"
            }, 0);

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen bg-[#fbfaf8] text-[#111] overflow-hidden flex flex-col items-center pt-[20vh] md:pt-[22vh]">
            
            {/* Top Pill Area - (user commented out) */}

            {/* Content Wrapper */}
            <div className="w-full flex justify-center px-4 lg:px-12 relative z-20">
                
                {/* The strictly left-aligned text block that holds everything without wrapping issues */}
                <div ref={textBlockRef} className="flex flex-col items-start relative w-max mx-auto">
                    
                    <div className="text-lines-wrapper flex flex-col items-start w-full relative z-10">
                        <div className="overflow-hidden pb-1 w-full">
                            <h2 className="mayor-headline-line text-[12vw] lg:text-[8vw] leading-[0.85] tracking-[-0.03em] font-sans font-black uppercase text-[#111] m-0 p-0 whitespace-nowrap">
                                DISCOVER A WORLD
                            </h2>
                        </div>
                        
                        <div className="overflow-hidden pb-1 w-full flex items-center gap-3 lg:gap-5">
                            <h2 className="mayor-headline-line text-[12vw] lg:text-[8vw] leading-[0.85] tracking-[-0.03em] font-sans font-black uppercase text-[#111] m-0 p-0 whitespace-nowrap flex items-center gap-2 md:gap-4">
                                OF <span className="font-heading italic font-light tracking-tighter text-[#9c8974] lowercase pt-2 lg:pt-4">curated</span> LUXURY
                            </h2>
                        </div>
                        
                        <div className="overflow-hidden pb-1 w-full">
                            <h2 className="mayor-headline-line text-[12vw] lg:text-[8vw] leading-[0.85] tracking-[-0.03em] font-sans font-black uppercase text-[#111] m-0 p-0 whitespace-nowrap">
                                AT THE PEARL.
                            </h2>
                        </div>
                    </div>

                    {/*
                         Static Anchor exactly in the corner matching image positioning.
                         This never moves and lets GSAP scrub mathematicals reliably! 
                    */}
                    <div ref={anchorRef} className="absolute right-[1%] lg:right-[2%] bottom-1 md:bottom-2 w-0 h-0 pointer-events-none opacity-0 z-0" />

                    {/* 
                         The absolutely positioned image strictly tethered to the bottom right 
                         corner of the text block bounds, pushed inwards perfectly to eliminate overlap 
                         with the full stop!
                    */}
                    <div 
                        ref={imageRef} 
                        className="absolute right-[1%] lg:right-[2%] bottom-1 md:bottom-2 z-30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[6px]"
                        style={{ width: "24%", height: "29%" }} 
                    >
                        <img 
                            ref={innerImageRef}
                            src="https://ariaholding.com/thelofts/wp-content/uploads/2025/08/NORTH-WEST-VIEW-scaled.jpg" 
                            alt="The Pearl" 
                            className="w-full h-full object-cover origin-center scale-[1.3] brightness-95" 
                        />
                    </div>
                    
                </div>
            </div>

        </section>
    );
}
