import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">
                <AnimatedSection>
                    <h1 className="mb-4">Inquire</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-20">Schedule a private viewing or request our comprehensive digital brochure.</p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <AnimatedSection delay={0.2} className="w-full h-full min-h-[400px] flex items-center">
                        {!isSubmitted ? (
                            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-[#888]">Full Name <span className="text-red-500">*</span></label>
                                    <input required minLength={2} type="text" id="name" className="peer w-full bg-transparent border-b border-[var(--color-border-color)] py-4 text-black focus:outline-none focus:border-black transition-colors placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="John Doe" />
                                    <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5">Please enter your full name</p>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2 relative">
                                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-[#888]">Email Address <span className="text-red-500">*</span></label>
                                        <input required type="email" id="email" className="peer w-full bg-transparent border-b border-[var(--color-border-color)] py-4 text-black focus:outline-none focus:border-black transition-colors placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="john@example.com" />
                                        <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5">Valid email required</p>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2 relative">
                                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-[#888]">Phone Number <span className="text-red-500">*</span></label>
                                        <input required type="tel" pattern="^\+?[0-9\s\-()]{7,20}$" id="phone" className="peer w-full bg-transparent border-b border-[var(--color-border-color)] py-4 text-black focus:outline-none focus:border-black transition-colors placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="+974 4491 3333" title="Phone number must be valid." />
                                        <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5">Valid phone required</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mt-4">
                                    <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-widest text-[#888]">Unit of Interest</label>
                                    <select required defaultValue="" id="interest" className="w-full bg-transparent border-b border-[var(--color-border-color)] py-4 text-black focus:outline-none focus:border-black transition-colors cursor-pointer">
                                        <option value="" disabled>Select residence type</option>
                                        <option value="studio">Studio Loft</option>
                                        <option value="1bhk">1 BHK Loft</option>
                                        <option value="2bhk">2 BHK Loft</option>
                                        <option value="3bhk">3 BHK Loft</option>
                                        <option value="penthouse">Penthouse</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2 mt-4 mb-4">
                                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-[#888]">Message</label>
                                    <textarea id="message" rows="4" className="w-full bg-transparent border-b border-[var(--color-border-color)] py-4 text-black focus:outline-none focus:border-black transition-colors resize-none placeholder:text-neutral-400" placeholder="How can we assist you?"></textarea>
                                </div>

                                <Button type="submit" className="w-full md:w-auto self-start mt-4 px-10 h-14 bg-black text-white hover:bg-neutral-800 transition-colors">
                                    <span className="uppercase tracking-[0.1em] text-xs font-medium">Send Inquiry</span>
                                    <ArrowRight size={18} className="ml-3" />
                                </Button>
                            </form>
                        ) : (
                            <div className="w-full h-full flex flex-col items-start justify-center py-20 px-4 animate-in fade-in zoom-in duration-500 rounded-[20px]">
                                <div className="w-16 h-16 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-2xl font-heading mb-3">Inquiry Received</h3>
                                <p className="text-[var(--color-text-muted)] text-sm max-w-md leading-relaxed">Thank you for your interest in The Lofts. A member of our dedicated sales team will contact you shortly to arrange a private viewing.</p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8 uppercase tracking-[0.15em] text-[10px] font-bold px-8">Submit Another</Button>
                            </div>
                        )}
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="flex flex-col justify-start lg:pl-10">
                        <div className="mb-12">
                            <h3 className="text-xl mb-4 font-heading">Sales Gallery</h3>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm mb-6">Experience the materials, finishes, and smart home technology firsthand at our interactive sales center.</p>
                            <address className="not-italic text-sm leading-relaxed text-[#111] mb-6 border-l-2 border-[var(--color-accent)] pl-4">
                                Level 1, VIP Marina Pavilion<br />
                                The Pearl-Qatar<br />
                                Doha, Qatar
                            </address>

                            <p className="text-xs uppercase tracking-widest font-semibold text-[#888] mb-2">Hours</p>
                            <p className="text-[var(--color-text-muted)] text-sm">Sunday – Thursday: 9am to 6pm<br />Saturday by appointment only</p>
                        </div>

                        <div className="w-full h-[300px] overflow-hidden rounded-[8px]">
                            <img src="/interior_detail_1773236742067.png" alt="Office Space" className="w-full h-full object-cover" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
