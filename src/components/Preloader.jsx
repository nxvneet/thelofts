import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export function Preloader() {
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsComplete(true);
                }
            });

            // Initial state
            gsap.set(containerRef.current, { yPercent: 0, height: '100vh', display: 'flex' });
            gsap.set(logoRef.current, { autoAlpha: 0, scale: 0.9 });

            // Logo fade in and slight scale
            tl.to(logoRef.current, { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" })
              .to(logoRef.current, { autoAlpha: 0, scale: 1.1, duration: 0.8, ease: "power2.inOut", delay: 0.3 })
              // Unmask reveal to top 
              .to(containerRef.current, { 
                  height: 0,
                  duration: 1.2, 
                  ease: "power3.inOut" 
              });
        });

        return () => ctx.revert();
    }, []);

    if (isComplete) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden">
            <div ref={logoRef} className="flex flex-col items-center text-white">
                <span className="font-heading text-4xl md:text-5xl tracking-widest leading-none">THE LOFTS</span>
                <span className="flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.2em] opacity-80 mt-3 md:mt-4">
                    <span className="w-10 md:w-14 h-[1px] bg-white opacity-60"></span>
                    <span>LA PLAGE SOUTH</span>
                    <span className="w-10 md:w-14 h-[1px] bg-white opacity-60"></span>
                </span>
            </div>
        </div>
    );
}
