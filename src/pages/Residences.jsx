import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/button';

export function Residences() {
    useEffect(() => {
        gsap.fromTo('.residence-card',
            { y: 80, opacity: 0, rotateX: 10 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.2, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8">
            <div className="max-w-[1280px] mx-auto pt-10">
                <AnimatedSection>
                    <h1 className="mb-4">Residences</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-20">Discover a collection of meticulously crafted 1, 2, 3 BHK and Studio lofts, each offering expansive views, smart-home integration, and premium finishes.</p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "3 bedroom Loft Luxury residences", size: "210 SQM", img: "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/5.webp", slug: "3-bhk-loft" },
                        { title: "2 bedroom Loft Luxury residences", size: "140 SQM", img: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/3BHK-lofts-1.jpg", slug: "2-bhk-loft" },
                        { title: "2 bedroom Luxury residences", size: "120 SQM", img: "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/21-BHK-residences-7.jpg", slug: "2-bhk" },
                        { title: "1 bedroom Luxury residences", size: "95 SQM", img: "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/2.webp", slug: "1-bhk" },
                        { title: "Luxury Studio Apartments", size: "65 SQM", img: "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/1.webp", slug: "studio" }
                    ].map((item, i) => (
                        <div key={i} className="residence-card bg-white rounded-[10px] overflow-hidden shadow-sm group">
                            <div className="h-[300px] overflow-hidden relative">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl mb-2 capitalize leading-tight">{item.title}</h3>
                                <p className="text-[var(--color-text-muted)] mb-6 text-sm">Starting from {item.size} of expertly designed living space.</p>
                                <Link to={`/residences/${item.slug}`} className="w-full block">
                                    <Button variant="outline" className="w-full text-xs tracking-widest font-medium uppercase pointer-events-none">View Details</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
