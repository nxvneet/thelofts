import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedTitle({ text, className = "", delay = 0 }) {
    const titleRef = useRef(null);

    // Split text into words only.
    const words = text.split(" ").map((word, wordIndex) => {
        return (
            <span key={wordIndex} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                <span className="inline-block transform translate-y-[110%] opacity-0 word-inner">
                    {word}
                </span>
            </span>
        );
    });

    useEffect(() => {
        const innerWords = titleRef.current.querySelectorAll('.word-inner');

        gsap.to(innerWords, {
            y: "0%",
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            stagger: 0.1,
            delay: delay,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 95%",
            }
        });
    }, [delay, text]);

    return (
        <div ref={titleRef} className={className}>
            {words}
        </div>
    );
}
