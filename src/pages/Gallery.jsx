import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const images = [
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/04_1.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/1.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/2.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/3.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/4.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/5.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/6.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/7.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/8.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/CAM01_13032023-scaled.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/05/VIEW-4-scaled.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/06/16.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/06/2_1.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/07/01-3.webp",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/BEACH-VIEW.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/GARDEN-VIEW-1-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/GARDEN-VIEW-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/NORTH-WEST-VIEW-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/SOUTH-SIDE-VIEW-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/SOUTH-WEST-BIRDS-EYE-VIEW-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/SOUTH-WEST-VIEW-scaled.jpg",
    "https://ariaholding.com/thelofts/wp-content/uploads/2025/08/WEST-SIDE-BIRDS-EYE-VIEW-scaled.jpg"
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
