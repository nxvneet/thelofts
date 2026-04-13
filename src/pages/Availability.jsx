import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const availableUnits = [
    { id: "L-401", type: "2 BHK", floor: "4th", size: "140 SQM", views: "Marina", price: "Contact for pricing" },
    { id: "L-405", type: "Studio", floor: "4th", size: "65 SQM", views: "Cityscape", price: "Contact for pricing" },
    { id: "L-502", type: "3 BHK", floor: "5th", size: "210 SQM", views: "Panoramic Gulf", price: "Contact for pricing" },
    { id: "L-701", type: "Penthouse", floor: "7th", size: "450 SQM", views: "360 Skyline", price: "Contact for pricing" },
];

export function Availability() {
    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">
                <AnimatedSection>
                    <h1 className="mb-4">Availability</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-12">Reserve your place at The Lofts. Current inventory is strictly limited.</p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="w-full overflow-x-auto pb-20">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#dddddd] text-xs uppercase tracking-widest text-[#888]">
                                <th className="py-6 pr-6 font-medium">Unit</th>
                                <th className="py-6 pr-6 font-medium">Type</th>
                                <th className="py-6 pr-6 font-medium">Floor</th>
                                <th className="py-6 pr-6 font-medium">Size</th>
                                <th className="py-6 pr-6 font-medium">Views</th>
                                <th className="py-6 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availableUnits.map((unit, i) => (
                                <tr key={i} className="border-b border-[var(--color-border-color)] group hover:bg-[#F2EFEA] transition-colors">
                                    <td className="py-6 pr-6 font-heading text-xl">{unit.id}</td>
                                    <td className="py-6 pr-6 font-medium">{unit.type}</td>
                                    <td className="py-6 pr-6 text-[var(--color-text-muted)]">{unit.floor}</td>
                                    <td className="py-6 pr-6 text-[var(--color-text-muted)]">{unit.size}</td>
                                    <td className="py-6 pr-6 text-[var(--color-text-muted)]">{unit.views}</td>
                                    <td className="py-6 text-right">
                                        <Button variant="ghost" size="sm" className="hidden lg:inline-flex uppercase tracking-widest text-xs h-auto py-2">
                                            Inquire <ArrowRight size={14} className="ml-2" />
                                        </Button>
                                        <ArrowRight size={18} className="lg:hidden ml-auto text-[var(--color-accent)]" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </AnimatedSection>
            </div>
        </div>
    );
}
