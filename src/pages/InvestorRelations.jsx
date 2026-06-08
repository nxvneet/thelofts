import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: "Are foreign nationals allowed to purchase property at The Lofts?",
        a: (
            <>
                Yes. The Lofts at La Plage South are located within The Pearl-Qatar, a government-designated freehold zone. Under Law No. 16 of 2018, non-Qataris are permitted to purchase freehold property in this area. Ownership is on a full freehold basis and allows buyers to retain full title and the right to resell.
                <br /><br />
                Furthermore, foreign property owners may qualify for residency in Qatar, subject to meeting the minimum investment threshold as determined by the Ministry of Interior. This makes ownership at The Lofts an attractive option for international buyers seeking both a residence and long-term presence in Qatar.
            </>
        )
    },
    {
        q: "What are the applicable service charges?",
        a: (
            <>
                Service charges at The Lofts cover the cost of maintaining all common areas, security, landscaping, shared utilities, concierge services, and upkeep of communal amenities.
                <br /><br />
                As of the most recent update, the indicative service charge is in the range of QAR 150-200 per square metre per annum. This fee is payable annually and reviewed periodically. All financials are managed through an Owners' Association framework in line with local real estate governance practices.
            </>
        )
    },
    {
        q: "Can owners sub-lease their units?",
        a: (
            <>
                Yes. Property owners at The Lofts are legally permitted to lease or sub-lease their units, either on a short-term or long-term basis, provided they comply with Qatar's applicable real estate and tourism regulations.
            </>
        )
    },
    {
        q: "Are property management services available?",
        a: (
            <>
                Yes. Comprehensive property management services are available for owners who wish to lease, maintain, or oversee their property remotely. These services may be provided either directly through the developer's affiliated partner or via licensed third-party management firms in Qatar.
                <br /><br />
                Typical services include:<br />
                – Tenant sourcing, leasing, and screening<br />
                – Rental income collection and disbursement<br />
                – Property inspections, maintenance, and repairs<br />
                – Cleaning, inventory, and handover for short-term or corporate lets<br /><br />
                This ensures peace of mind for owners while maximising asset performance and maintaining the residence to a premium standard.
            </>
        )
    },
    {
        q: "What is the process for resale of a unit?",
        a: (
            <>
                The resale process at The Lofts is clear and supported by established procedures:
                <br /><br />
                – Obtain a No Objection Certificate (NOC) from the developer, confirming dues are settled<br />
                – Execute a new Sale and Purchase Agreement (SPA) between buyer and seller<br />
                – Complete the transaction at the Real Estate Registration Department, Ministry of Justice, Qatar<br /><br />
                A government transfer fee (currently 0.25% of the property value) applies. The seller may also be liable for broker fees if applicable. Our sales team can assist with introductions to licensed agents and legal consultants familiar with The Pearl's transaction protocols.
            </>
        )
    }
];

export function InvestorRelations() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="bg-[var(--color-background-light)] min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center pt-[80px]">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/facade_large_1773236723300.png" 
                        alt="Investor Relations" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-5">
                    <h1 className="text-[3.5rem] md:text-[5rem] font-heading font-normal leading-tight tracking-tight uppercase text-white">Investor Relations</h1>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20">
                {/* 2. INTRO SECTION */}
                <AnimatedSection className="mb-32 text-center max-w-[800px] mx-auto">
                    <p className="text-[var(--color-text-primary)] text-xl md:text-2xl font-light leading-relaxed font-heading italic">
                        Whether used as a permanent residence, seasonal home, or investment property, The Lofts delivers enduring value with rental potential in one of Qatar's most in-demand areas.
                    </p>
                </AnimatedSection>

                {/* 3. CONTEXTUAL IMAGE SECTION (As seen in screenshot) */}
                <AnimatedSection className="mb-32">
                    <div className="w-full aspect-[21/9] overflow-hidden group rounded-[4px]">
                        <img 
                            src="/journey_exterior_1773123885314.png" 
                            alt="The Lofts Architecture" 
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                    </div>
                </AnimatedSection>

                {/* 4. INFO GRID SECTION */}
                <AnimatedSection delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-40 border-t border-[var(--color-border-color)] pt-16">
                    <div>
                        <h3 className="text-xl font-heading mb-6 uppercase tracking-wider border-b border-[var(--color-border-color)] pb-4">Investment Highlights</h3>
                        <ul className="flex flex-col gap-4 text-sm text-[var(--color-text-muted)] leading-relaxed list-none">
                            <li>High-demand location with zero vacancy</li>
                            <li>Fully managed rental program available</li>
                            <li>Attractive long-term capital appreciation</li>
                            <li>Freehold ownership with residency program benefits</li>
                            <li>Strong resale performance for The Pearl properties</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-heading mb-6 uppercase tracking-wider border-b border-[var(--color-border-color)] pb-4">Financing</h3>
                        <ul className="flex flex-col gap-4 text-sm text-[var(--color-text-muted)] leading-relaxed list-none">
                            <li>Available with major Qatari banks</li>
                            <li>Lease-to-own structures</li>
                            <li>Mortgage advisory available</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-heading mb-6 uppercase tracking-wider border-b border-[var(--color-border-color)] pb-4">Market Outlook</h3>
                        <ul className="flex flex-col gap-4 text-sm text-[var(--color-text-muted)] leading-relaxed list-none">
                            <li>Pearl property values +6% CAGR over 5 years</li>
                            <li>Doha rental market rebounding post-World Cup</li>
                            <li>Qatar 2030 National Vision supports residential growth</li>
                        </ul>
                    </div>
                </AnimatedSection>

                {/* 5. FAQs SECTION */}
                <AnimatedSection delay={0.2} className="w-full mb-32">
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-heading font-normal mb-16 text-center text-[var(--color-text-primary)]">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
                        {faqs.map((faq, index) => (
                            <div key={index} className="flex flex-col">
                                <button
                                    className={`w-full flex justify-between items-center p-5 text-left cursor-pointer transition-all border ${openFaq === index ? 'border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]' : 'border-[var(--color-border-color)] hover:border-[var(--color-text-muted)]'}`}
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                >
                                    <div className="flex items-center gap-4">
                                        {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        <span className="font-medium text-[0.9rem] uppercase tracking-wider">{faq.q}</span>
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out text-[var(--color-text-muted)] leading-relaxed text-[0.95rem] ${openFaq === index ? 'opacity-100 mt-6 px-1' : 'opacity-0 h-0 overflow-hidden'}`}
                                >
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* 6. NEED MORE DETAILS CTA */}
                <AnimatedSection className="py-24 bg-[var(--color-background-light)] px-5 text-center relative overflow-hidden rounded-[8px] border border-[var(--color-border-color)]">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <img src="/hero_view_1773123775976.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-heading mb-8">Need more details?</h2>
                        <Button asChild variant="outline" className="h-14 px-10 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-500 uppercase tracking-widest text-xs font-semibold">
                            <Link to="/contact">Get in touch <ArrowRight size={16} className="ml-3" /></Link>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
