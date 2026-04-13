import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function GlobalCTA() {
    const navigate = useNavigate();
    return (
        <AnimatedSection className="relative w-full overflow-hidden">
            {/* Background Split */}
            <div className="absolute top-0 left-0 w-full h-[50%] bg-[var(--color-background-light)] z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-black z-0"></div>

            {/* Central Card */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-12 py-20 md:py-32">
                <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black shadow-2xl flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] text-center p-8 md:p-16">
                    
                    {/* Card Image Background */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://ariaholding.com/thelofts/wp-content/uploads/2025/08/SOUTH-WEST-VIEW-scaled.jpg" 
                            alt="Find your dream home today" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] mb-6 text-white">
                            Find your dream home today!
                        </h2>
                        <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-12 max-w-[800px] font-medium font-sans">
                            We make it easy for you to find the perfect property that meets your needs. With curated residences across diverse floor plans, a sophisticated waterfront life is just a step away.
                        </p>
                        <button onClick={() => navigate('/contact')} className="bg-white text-black cursor-pointer hover:scale-105 transition-transform duration-300 rounded-[8px] px-8 py-4 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-neutral-100 relative z-20 pointer-events-auto">
                            Book a date <ArrowRight size={16} className="-rotate-45" />
                        </button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
