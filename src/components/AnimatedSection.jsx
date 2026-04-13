import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection({ children, className = "", delay = 0, once = true }) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        let ctx = gsap.context(() => {
            // Select all immediate children or designated elements to stagger
            const elementsToAnimate = el.querySelectorAll('.animate-me, h2, h3, p, ul > li, .btn-primary');
            
            if (elementsToAnimate.length === 0) return;

            gsap.fromTo(elementsToAnimate,
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                    stagger: 0.15,
                    delay: delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        once: once,
                    }
                }
            );
        });

        return () => ctx.revert();
    }, [delay, once]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}
