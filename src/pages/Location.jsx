import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { School, HeartPulse, Store, Umbrella } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const points = [
    { time: "1 min", title: "Marina Promenade", sub: "Dining & Designer Retail" },
    { time: "3 mins", title: "Private Beach Club", sub: "Leisure & Watersports" },
    { time: "25 mins", title: "Int. Airport", sub: "Global Connectivity" }
];

const percentages = [15, 50, 85];

export function Location() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const progressRef = useRef(null);
    const nodesRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=220%",
                    pin: true,
                    scrub: 1.2,
                    snap: {
                        snapTo: [0, 0.15, 0.5, 0.85, 1], // Precise parking nodes matches line locations perfectly
                        duration: 0.4,
                        ease: "power3.inOut"
                    }
                }
            });

            // 📈 Progress line fill strictly mapped from 0 to 1 time units
            tl.to(progressRef.current, {
                width: "100%",
                ease: "none",
                duration: 1
            }, 0);

            // ✨ Node animations gracefully scrub in exactly when intersected
            percentages.forEach((p, i) => {
                const progressPoint = p / 100;
                // Preempt the impact slightly so visually the highlight swells *as* the line hits it
                const triggerStart = Math.max(0, progressPoint - 0.05); 
                
                const node = nodesRef.current[i];
                const dot = node.querySelector('.dot');
                const textTop = node.querySelector('.text-top');
                const textBot = node.querySelector('.text-bot');

                // Animate Dot Impact
                tl.fromTo(dot,
                    { backgroundColor: "#d5d5d5", scale: 0.7, borderWidth: "0px", borderColor: "#fff" },
                    {
                        backgroundColor: "#ff5c35",
                        scale: 1.4,
                        borderWidth: "2px",
                        duration: 0.1, // Resolves over 10% of the scrub distance
                        ease: "power2.out"
                    },
                    triggerStart
                );

                // Reveal Typography Text 
                tl.fromTo([textTop, textBot],
                    { opacity: 0.3, y: 12 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.15, // Smooth floating pop 
                        stagger: 0.04,
                        ease: "power2.out"
                    },
                    triggerStart
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white text-[#111]">

            {/* SECTION */}
            <div
                ref={sectionRef}
                className="w-full relative pt-28 pb-32 overflow-hidden border-b border-black/5"
            >

                {/* HEADER */}
                <div className="max-w-[1280px] mx-auto px-5 lg:px-12 grid md:grid-cols-12 gap-10 mb-32 shrink-0">
                    <div className="md:col-span-4 pl-4 lg:pl-0 pt-2">
                        <span className="text-[#ff5c35] text-lg font-medium">
                            Neighborhood Highlights
                        </span>
                    </div>

                    <div className="md:col-span-8">
                        <h2 className="text-[30px] md:text-[44px] leading-[1.15] font-medium font-sans">
                            Positioned in the exclusive La Plage South development within The Pearl-Qatar, offering beachfront living and immediate marina access.
                        </h2>
                    </div>
                </div>

                {/* TRACK */}
                <div className="w-full flex justify-center py-6">
                    <div
                        ref={containerRef}
                        className="relative w-[85%] max-w-[1200px] h-[90px]"
                    >

                        {/* Base Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#d5d5d5]" />

                        {/* Progress Line */}
                        <div
                            ref={progressRef}
                            className="absolute top-1/2 left-0 h-[2px] bg-[#ff5c35] shadow-[0_0_10px_rgba(255,92,53,0.3)] origin-left"
                            style={{ width: "0%" }}
                        />

                        {/* POINTS */}
                        {percentages.map((p, i) => (
                            <div
                                key={i}
                                ref={(el) => (nodesRef.current[i] = el)}
                                className="absolute top-1/2 will-change-transform z-10"
                                style={{ left: `${p}%`, transform: "translate(-50%, -50%)" }}
                            >

                                {/* TOP TEXT */}
                                <div className="text-top absolute bottom-[32px] text-center whitespace-nowrap opacity-30">
                                    <h3 className="text-[30px] font-medium bg-white px-2 rounded mb-[2px]">
                                        {points[i].time}
                                    </h3>
                                    <p className="text-[13px] font-medium tracking-wide">
                                        {points[i].title}
                                    </p>
                                </div>

                                {/* DOT CORE */}
                                <div className="dot w-[14px] h-[14px] rounded-full bg-[#d5d5d5] z-10 mx-auto" style={{ boxSizing: 'border-box' }} />

                                {/* BOTTOM TEXT */}
                                <div className="text-bot absolute top-[34px] text-center w-[160px] -translate-x-[50%] left-[50%] opacity-30">
                                    <p className="text-[13px] text-[#666] leading-snug">
                                        {points[i].sub}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

            {/* Nearby Attractions (Dark Layout Pattern) */}
            <div className="w-full bg-[#111111] py-24 lg:py-32 border-b border-black/20">
                <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
                    <AnimatedSection>
                        <h2 className="text-[36px] md:text-[52px] font-sans font-medium text-center text-white mb-20 leading-tight">
                            Nearby<br />Attractions
                        </h2>
                    </AnimatedSection>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-[900px] mx-auto">
                        {/* Schools */}
                        <AnimatedSection delay={0.1}>
                            <div className="flex items-start gap-6">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    {/* Orange blob offset bottom-right */}
                                    <div className="absolute w-8 h-8 bg-[#ff5c35] rounded-full z-0 bottom-0 right-0 translate-x-2 translate-y-3" />
                                    {/* Strict Circle border */}
                                    <div className="absolute inset-0 border-[1px] border-white/80 rounded-full z-10 flex items-center justify-center bg-[#111111]">
                                        <School className="w-6 h-6 text-white stroke-[1.5]" />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-white text-[20px] md:text-[22px] font-medium mb-1 tracking-wide font-sans">Schools</h3>
                                    <p className="text-[#999] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                                        Swiss International School, Qatar Academy
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Healthcare */}
                        <AnimatedSection delay={0.2}>
                            <div className="flex items-start gap-6">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    {/* Orange blob offset top-right */}
                                    <div className="absolute w-8 h-8 bg-[#ff5c35] rounded-full z-0 top-0 right-0 translate-x-3 -translate-y-2" />
                                    {/* Squircle / Soft Corner border */}
                                    <div className="absolute inset-0 border-[1px] border-white/80 rounded-[16px] z-10 flex items-center justify-center bg-[#111111]">
                                        <HeartPulse className="w-6 h-6 text-white stroke-[1.5]" />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-white text-[20px] md:text-[22px] font-medium mb-1 tracking-wide font-sans">Healthcare</h3>
                                    <p className="text-[#999] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                                        Sidra, Al-Ahli, Turkish Hospital
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        {/* Retail */}
                        <AnimatedSection delay={0.3}>
                            <div className="flex items-start gap-6">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    {/* Orange blob offset bottom-left */}
                                    <div className="absolute w-8 h-8 bg-[#ff5c35] rounded-full z-0 bottom-0 left-0 -translate-x-2 translate-y-3" />
                                    {/* Organic Leaf shape border matching eclectic design */}
                                    <div className="absolute inset-0 border-[1px] border-white/80 rounded-tr-[24px] rounded-bl-[24px] rounded-tl-[8px] rounded-br-[8px] z-10 flex items-center justify-center bg-[#111111]">
                                        <Store className="w-6 h-6 text-white stroke-[1.5]" />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-white text-[20px] md:text-[22px] font-medium mb-1 tracking-wide font-sans">Retail</h3>
                                    <p className="text-[#999] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                                        Lagoona Mall, Place Vendôme
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        {/* Leisure */}
                        <AnimatedSection delay={0.4}>
                            <div className="flex items-start gap-6">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    {/* Orange blob offset top-left */}
                                    <div className="absolute w-8 h-8 bg-[#ff5c35] rounded-full z-0 top-0 left-0 -translate-x-3 -translate-y-2" />
                                    {/* Reverse Organic Leaf shape */}
                                    <div className="absolute inset-0 border-[1px] border-white/80 rounded-tl-[24px] rounded-br-[24px] rounded-tr-[8px] rounded-bl-[8px] z-10 flex items-center justify-center bg-[#111111]">
                                        <Umbrella className="w-6 h-6 text-white stroke-[1.5]" />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-white text-[20px] md:text-[22px] font-medium mb-1 tracking-wide font-sans">Leisure</h3>
                                    <p className="text-[#999] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                                        Doha Golf Club, Katara Beach, Yacht Clubs, Al Maha Beach, Winter Wonderland
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-16 pb-32">
                <AnimatedSection>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-medium mb-12 text-center lg:text-left text-[#111]">Map View</h2>
                    <div className="w-full h-[500px] md:h-[650px] rounded-[24px] overflow-hidden shadow-sm border border-black/5 flex bg-[#f4f4f4]">
                        <iframe
                            title="The Lofts Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3605.9723230620803!2d51.54714407516709!3d25.37222377759868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4cdc02e2c4d%3A0xc3fde93f1fa6d07e!2sThe%20Pearl-Qatar!5e0!3m2!1sen!2qa!4v1703080000000!5m2!1sen!2qa"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </AnimatedSection>
            </div>

        </div>
    );
}