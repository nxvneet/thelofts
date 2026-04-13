import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function About() {
    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">

                <AnimatedSection>
                    <h1 className="mb-4">About Us</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-20">The vision and minds behind The Lofts.</p>
                </AnimatedSection>

                {/* The Vision section */}
                <AnimatedSection delay={0.2} className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-32">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl font-heading mb-4 text-[var(--color-text-primary)]">The Vision</h2>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col gap-6 text-[var(--color-text-muted)] text-lg leading-relaxed">
                        <p>The Lofts represent Aria Capital’s commitment to timeless elegance, smart urban living, and investment-ready design.</p>
                        <p>Positioned at the heart of The Pearl, The Lofts offer a boutique residential experience crafted for modern global citizens, with an exclusive collection of fully furnished residences.</p>
                    </div>
                </AnimatedSection>

                {/* Design Philosophy section */}
                <AnimatedSection delay={0.2} className="w-full bg-white p-10 lg:p-20 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[var(--color-border-color)] mb-32 rounded-[8px]">
                    <div className="mb-16">
                        <h2 className="text-4xl font-heading tracking-tight mb-4 text-[var(--color-text-primary)]">Design Philosophy</h2>
                        <div className="w-[60px] h-[1px] bg-[var(--color-accent)]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-xl font-medium mb-4">Timeless Design</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">The design embraces modern interiors rooted in quiet luxury, creating light-filled homes that flow seamlessly into the coastal landscape, offering panoramic views of the Arabian Gulf.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4">Contemporary Comforts</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">The design embraces modern interiors rooted in quiet luxury, expansive layouts, open-plan living, and outdoor terraces, creating light-filled homes that flow seamlessly into the coastal landscape.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4">Client-Centered Approach</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">Your vision leads the way — we listen, adapt, and design with your lifestyle in mind.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4">Conscious Craftsmanship</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">We value sustainability and partner with artisans who share our commitment to ethical design.</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Developer Profile */}
                <AnimatedSection delay={0.2} className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-32 border-t border-[var(--color-border-color)] pt-20">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl font-heading mb-4 text-[var(--color-text-primary)]">Developer Profile</h2>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col gap-6 text-[var(--color-text-muted)] text-lg leading-relaxed">
                        <p>Aria Capital is a boutique investment and development firm specializing in high-design residential and mixed-use properties across Qatar and the Gulf.</p>
                        <p>Known for quality, transparency, and value creation, Aria Capital brings international best practices to local markets.</p>
                    </div>
                </AnimatedSection>

                {/* Timeline */}
                <AnimatedSection delay={0.2} className="mb-32">
                    <h2 className="text-4xl font-heading tracking-tight mb-16 text-[var(--color-text-primary)]">Project Timeline</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full divide-x divide-transparent lg:divide-[var(--color-border-color)]">
                        {[
                            { step: 1, text: "Concept Design" },
                            { step: 2, text: "Construction Start" },
                            { step: 3, text: "Structural Completion" },
                            { step: 4, text: "Handover" },
                            { step: 5, text: "Sales Launch" },
                            { step: 6, text: "Leasing Commencement" }
                        ].map(item => (
                            <div key={item.step} className="flex flex-col gap-4 text-center items-center py-4 px-2">
                                <div className="w-12 h-12 rounded-full border border-[var(--color-border-color)] text-[var(--color-accent)] flex items-center justify-center font-heading text-xl">{item.step}</div>
                                <p className="font-medium text-sm tracking-wider uppercase text-[var(--color-text-primary)]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Private Viewing CTA */}
                <AnimatedSection delay={0.2} className="w-full bg-[var(--color-primary)] text-white p-12 lg:p-24 flex flex-col lg:flex-row justify-between items-center gap-12 rounded-[8px]">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">Schedule Your<br />Private Viewing Today</h2>
                        <p className="text-[#aaaaaa] text-lg max-w-[500px]">Experience the property in person with a private guided tour. Select a convenient time, and our team will walk you through every detail so you can see why this could be your next home or investment.</p>
                    </div>
                    <Button className="w-full md:w-auto h-16 px-10 text-[11px] font-semibold tracking-[0.15em] uppercase border-white/30 text-white hover:bg-white/10" variant="outline">
                        Schedule a Viewing <ArrowRight size={16} className="ml-3" />
                    </Button>
                </AnimatedSection>

            </div>
        </div>
    );
}
