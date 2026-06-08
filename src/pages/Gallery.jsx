import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const images = [
    "/hero_view_1773123775976.png",
    "/facade_large_1773236723300.png",
    "/journey_exterior_1773123885314.png",
    "/journey_room_1773123865446.png",
    "/kitchen_view_1773123804891.png",
    "/concierge_lobby_1773123823125.png",
    "/gym_wellness_1773123838208.png",
    "/hero_lounge_1773236705621.png",
    "/interior_detail_1773236742067.png",
    "/unit_3bed_loft_1773238111737.png",
    "/unit_2bed_loft_lux_1773238128147.png",
    "/unit_2bed_loft_1773238147265.png",
    "/unit_1bed_1773238177449.png",
    "/unit_studio_1773238192262.png",
    "/media__1773123489248.png",
    "/media__1773123489274.png",
    "/media__1773123489364.png",
    "/media__1773123489418.png",
    "/media__1773123489435.png",
    "/media__1773236565354.png",
    "/media__1773236565406.png",
    "/media__1773236565451.png",
    "/media__1773236565492.png",
    "/media__1773236565521.png"
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = React.useState(null);

    useEffect(() => {
        gsap.fromTo('.gallery-item',
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    // Close modal on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="pt-[120px] pb-[80px] bg-[var(--color-background-light)] px-5 lg:px-8 min-h-screen">
            <div className="max-w-[1280px] mx-auto pt-10">
                <AnimatedSection>
                    <h1 className="mb-4">Gallery</h1>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-[600px] mb-12">Take a visual tour through The Lofts, experiencing the unparalleled attention to detail.</p>
                </AnimatedSection>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
                    {images.map((img, i) => (
                        <div key={i} className="gallery-item break-inside-avoid overflow-hidden rounded-[8px] cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 rounded-[8px]"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8" onClick={() => setSelectedImage(null)}>
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black border border-white/20 rounded-full p-3 transition-all duration-300 z-50"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedImage} 
                            alt="Expanded view" 
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-md" 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
