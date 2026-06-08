import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export function Amenities() {
    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">
                <AnimatedSection>
                    <h1 className="mb-4 text-[var(--color-text-primary)]">Amenities</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-20">Access the pinnacle of elevated living.</p>
                </AnimatedSection>

                <div className="flex flex-col gap-20">
                    {[
                        { tag: "Concierge & Valet", title: "Five-Star Service", desc: "A discreet, dedicated team ready to anticipate your every need 24/7.", img: "/concierge_lobby_1773123823125.png" },
                        { tag: "Wellness Center", title: "Holistic Health", desc: "State-of-the-art Technogym equipment, yoga studio, and private spa therapy rooms.", img: "/gym_wellness_1773123838208.png" },
                        { tag: "Lounge", title: "The Residents' Club", desc: "Exclusive gathering spaces designed for business and pleasure, featuring a private bar and cinema.", img: "/hero_lounge_1773236705621.png" },
                    ].map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1} className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden rounded-[10px]">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-[#a48c78] mb-6">{item.tag}</p>
                                <h2 className="mb-6 text-[var(--color-text-primary)] leading-none">{item.title}</h2>
                                <p className="text-[var(--color-text-muted)] text-lg max-w-md">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
}
