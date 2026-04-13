import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function NewsUpdates() {
    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">

                <AnimatedSection>
                    <h1 className="mb-4">News & Updates</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-20 leading-relaxed">Stay informed on the latest project milestones, exclusive events, and corporate announcements from Aria Capital.</p>
                </AnimatedSection>

                {/* Layout grid for Events and Press Releases */}
                <AnimatedSection delay={0.2} className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">

                    {/* Events Column */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl font-heading mb-12">Upcoming Events</h2>
                        <div className="flex flex-col gap-6">
                            {[
                                "Exclusive open house weekends",
                                "Investor briefings at Aria HQ",
                                "Design showcase evenings"
                            ].map((event, i) => (
                                <div key={i} className="bg-white p-8 border border-[var(--color-border-color)] rounded-[8px] hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-lg leading-tight group-hover:text-[var(--color-accent)] transition-colors pr-6">{event}</h4>
                                        <ArrowRight size={20} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Press Releases Column */}
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl font-heading mb-12">Press Releases</h2>
                        <div className="flex flex-col gap-8">
                            {[
                                { date: "10th July 2025", title: "The Lofts: Aria Capital launches boutique residences at The Pearl" },
                                { date: "10th July 2025", title: "Aria Capital signs sustainability partnership for The Lofts" },
                                { date: "10th July 2025", title: "The Lofts: Aria Capital launches boutique residences at The Pearl" }
                            ].map((press, i) => (
                                <div key={i} className="flex flex-col gap-3 pb-8 border-b border-[var(--color-border-color)] group hover:border-[var(--color-primary)] transition-colors cursor-pointer">
                                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-accent)]">{press.date}</span>
                                    <h3 className="text-2xl font-heading text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-[1.3]">{press.title}</h3>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="mt-12 w-full md:w-auto px-8">
                            <span className="uppercase tracking-[0.1em] text-xs font-medium">Load More</span>
                        </Button>
                    </div>

                </AnimatedSection>
            </div>
        </div>
    );
}
