import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/button';
import { ChevronRight, ChevronLeft, Calendar as CalendarIcon, Clock, Mail, Phone, User, Maximize2, Layers, Grid } from 'lucide-react';
import { cn } from '../lib/utils';
import { GlobalCTA } from '../components/GlobalCTA';

gsap.registerPlugin(ScrollTrigger);

export function UnitDetails() {
    const { unitId } = useParams();

    const unitDetailsMap = {
        '3-bhk-loft': {
            titlePart1: '3 bedroom Loft',
            titlePart2: 'Luxury residences',
            breadcrumb: '3 bedroom Loft Luxury residences',
            heroImage: '/unit_3bed_loft_1773238111737.png',
            visualSymphonyImage: '/hero_lounge_1773236705621.png',
            residenceFloors: ['Ground Floor', 'Second Floor', 'Fourth Floor'],
            residenceLayouts: {
                'Ground Floor': [
                    { title: 'Layout B', units: '1', amenity: 'Pool', totalArea: '423 SQM.', image: '/layout_plan_3bhk.svg' },
                    { title: 'Layout A', units: '2', amenity: 'Lounge', totalArea: '403 SQM.', image: '/layout_plan_3bhk.svg' }
                ],
                'Second Floor': [
                    { title: 'Layout A', units: '2', amenity: 'Gym', totalArea: '403 SQM.', image: '/layout_plan_3bhk.svg' },
                    { title: 'Layout C', units: '1', amenity: 'Garden', totalArea: '216 SQM.', image: '/layout_plan_3bhk.svg' }
                ],
                'Fourth Floor': [
                    { title: 'Layout D', units: '1', amenity: 'Terrace', totalArea: '223 SQM.', image: '/layout_plan_3bhk.svg' }
                ]
            }
        },
        '2-bhk-loft': {
            titlePart1: '2 bedroom Loft',
            titlePart2: 'Luxury residences',
            breadcrumb: '2 bedroom Loft Luxury residences',
            heroImage: '/unit_2bed_loft_lux_1773238128147.png',
            visualSymphonyImage: '/kitchen_view_1773123804891.png',
            residenceFloors: ['First Floor', 'Third Floor', 'Fifth Floor'],
            residenceLayouts: {
                'First Floor': [
                    { title: 'Layout A', units: '2', amenity: 'Pool', totalArea: '310 SQM.', image: '/layout_plan_2bhk.svg' },
                    { title: 'Layout B', units: '1', amenity: 'Lounge', totalArea: '325 SQM.', image: '/layout_plan_2bhk.svg' }
                ],
                'Third Floor': [
                    { title: 'Layout C', units: '1', amenity: 'Deck', totalArea: '305 SQM.', image: '/layout_plan_2bhk.svg' }
                ],
                'Fifth Floor': [
                    { title: 'Layout E', units: '2', amenity: 'Terrace', totalArea: '340 SQM.', image: '/layout_plan_2bhk.svg' }
                ]
            }
        },
        '2-bhk': {
            titlePart1: '2 bedroom',
            titlePart2: 'Luxury residences',
            breadcrumb: '2 bedroom Luxury residences',
            heroImage: '/unit_2bed_loft_1773238147265.png',
            visualSymphonyImage: '/journey_room_1773123865446.png',
            residenceFloors: ['Ground Floor', 'First Floor', 'Second Floor'],
            residenceLayouts: {
                'Ground Floor': [
                    { title: 'Layout G', units: '3', amenity: 'Garden', totalArea: '185 SQM.', image: '/layout_plan_2bhk.svg' }
                ],
                'First Floor': [
                    { title: 'Layout A', units: '4', amenity: 'Pool View', totalArea: '190 SQM.', image: '/layout_plan_2bhk.svg' }
                ],
                'Second Floor': [
                    { title: 'Layout B', units: '2', amenity: 'City View', totalArea: '195 SQM.', image: '/layout_plan_2bhk.svg' }
                ]
            }
        },
        '1-bhk': {
            titlePart1: '1 bedroom',
            titlePart2: 'Luxury residences',
            breadcrumb: '1 bedroom Luxury residences',
            heroImage: '/unit_1bed_1773238177449.png',
            visualSymphonyImage: '/media__1773123489364.png',
            residenceFloors: ['Ground Floor', 'Second Floor', 'Fourth Floor'],
            residenceLayouts: {
                'Ground Floor': [
                    { title: 'Layout A', units: '2', amenity: 'Lounge', totalArea: '95 SQM.', image: '/layout_plan_1bhk.svg' }
                ],
                'Second Floor': [
                    { title: 'Layout A', units: '4', amenity: 'Park View', totalArea: '95 SQM.', image: '/layout_plan_1bhk.svg' }
                ],
                'Fourth Floor': [
                    { title: 'Layout B', units: '3', amenity: 'Terrace', totalArea: '98 SQM.', image: '/layout_plan_1bhk.svg' }
                ]
            }
        },
        'studio': {
            titlePart1: 'Luxury Studio',
            titlePart2: 'Apartments',
            breadcrumb: 'Luxury Studio Apartments',
            heroImage: '/studio_improved_1773830107563.png',
            visualSymphonyImage: '/media__1773236565451.png',
            residenceFloors: ['First Floor', 'Third Floor', 'Fifth Floor'],
            residenceLayouts: {
                'First Floor': [
                    { title: 'Layout A', units: '4', amenity: 'Gym', totalArea: '65 SQM.', image: '/layout_plan_studio.svg' }
                ],
                'Third Floor': [
                    { title: 'Layout B', units: '5', amenity: 'Pool View', totalArea: '68 SQM.', image: '/layout_plan_studio.svg' }
                ],
                'Fifth Floor': [
                    { title: 'Layout A', units: '3', amenity: 'Sky Deck', totalArea: '65 SQM.', image: '/layout_plan_studio.svg' }
                ]
            }
        }
    };

    const details = unitDetailsMap[unitId] || unitDetailsMap['3-bhk-loft'];

    const heroRef = useRef(null);
    const visualRef = useRef(null);
    const featuresRef = useRef(null);
    const layoutsRef = useRef(null);
    const globalFloorplanRef = useRef(null);
    const contactRef = useRef(null);
    const videoRef = useRef(null);

    const [activeTab, setActiveTab] = useState('Ground Floor');
    const [contactType, setContactType] = useState('In-Person');
    const [isPlaying, setIsPlaying] = useState(true);

    const [activeResFloor, setActiveResFloor] = useState(details.residenceFloors[0]);
    const [activeLayoutIdx, setActiveLayoutIdx] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Update active layout idx securely when floor tab changes
    useEffect(() => {
        setActiveLayoutIdx(0);
    }, [activeResFloor, unitId]);

    // Derived current specific layout data
    const activeLayoutsArray = details.residenceLayouts[activeResFloor] || [];
    const currentSpecificLayout = activeLayoutsArray[activeLayoutIdx] || activeLayoutsArray[0] || { title: 'Layout', units: '-', amenity: '-', totalArea: '-', image: '' };

    const handleNextLayout = () => {
        if (activeLayoutsArray.length > 0) {
            setActiveLayoutIdx((prev) => (prev + 1) % activeLayoutsArray.length);
        }
    };

    const handlePrevLayout = () => {
        if (activeLayoutsArray.length > 0) {
            setActiveLayoutIdx((prev) => (prev - 1 + activeLayoutsArray.length) % activeLayoutsArray.length);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Force scroll to top on mount for correct ScrollTrigger calculations
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Parallax
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Hero Text reveal
            gsap.fromTo('.hero-text-split span',
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.2 }
            );

            // Visual Symphony
            gsap.fromTo('.visual-text-reveal > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: visualRef.current, start: "top 80%" }
                }
            );
            
            gsap.fromTo('.visual-image',
                { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', scale: 1.1 },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1, duration: 1.5, ease: "power4.inOut",
                    scrollTrigger: { trigger: visualRef.current, start: "top 75%" }
                }
            );

            // Global Floor Plans (Building Overview)
            gsap.fromTo('.global-floorplan-reveal > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: globalFloorplanRef.current, start: "top 80%" }
                }
            );

            // Features List Stagger
            gsap.fromTo('.feature-item',
                { opacity: 0, x: -20 },
                {
                    opacity: 1, x: 0, duration: 0.8, stagger: 0.05, ease: "power3.out",
                    scrollTrigger: { trigger: featuresRef.current, start: "top 80%" }
                }
            );

            // Layouts Section
            gsap.fromTo('.layout-reveal > *',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: layoutsRef.current, start: "top 75%" }
                }
            );

            // Contact Form
            gsap.fromTo('.contact-reveal-left > *',
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: contactRef.current, start: "top 80%" }
                }
            );
            gsap.fromTo('.contact-reveal-right',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: contactRef.current, start: "top 80%" }
                }
            );

        });
        return () => ctx.revert();
    }, []);

    const features = [
        "Entrance foyer with wooden flooring",
        "Store area",
        "Double height living room with chandelier, dining spaces and powder room",
        "Attendant/valet room with attached bath",
        "Fully fitted modular kitchen with integrated lighting",
        "Utility room",
        "Internal elevator and floating staircase",
        "Floor-to-ceiling windows",
        "3 master bedrooms with beach view, ensuite bath, walk-in closets and private balconies",
        "Private garden overlooking the beach and terrace space",
        "Children's bedroom with ensuite bath",
        "Driver room in the basement",
        "Family room for entertainment and lounging",
        "Beach view"
    ];

    return (
        <div className="w-full bg-[var(--color-background-light)] min-h-screen overflow-hidden">
            
            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative w-full h-[60vh] md:h-[75vh] flex flex-col justify-end overflow-hidden pb-12 mt-[80px]">
                <div className="absolute inset-0 z-0 bg-[#EFEFEF]">
                    <img 
                        src={details.heroImage}
                        alt={`${details.titlePart1} ${details.titlePart2}`} 
                        className="hero-bg w-full h-[120%] object-cover object-center -top-[10%]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </div>
                
                <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 lg:px-8">
                    <h1 className="hero-text-split text-white text-4xl md:text-5xl lg:text-7xl overflow-hidden leading-tight font-heading mb-6 drop-shadow-lg capitalize">
                        <span className="inline-block relative overflow-hidden"><span className="inline-block relative">{details.titlePart1}</span></span> <br className="hidden md:block"/>
                        <span className="inline-block relative overflow-hidden"><span className="inline-block relative">{details.titlePart2}</span></span>
                    </h1>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="w-full bg-white border-b border-[var(--color-border-color)]">
                <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 py-4 flex items-center text-[10px] md:text-xs text-[var(--color-text-muted)] tracking-widest uppercase font-medium">
                    <Link to="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3 mx-2 opacity-50" />
                    <Link to="/residences" className="hover:text-[var(--color-text-primary)] transition-colors">Residences</Link>
                    <ChevronRight className="w-3 h-3 mx-2 opacity-50" />
                    <span className="text-[var(--color-text-primary)] capitalize">{details.breadcrumb}</span>
                </div>
            </div>

            {/* 2. Visual Symphony */}
            <section ref={visualRef} className="py-24 md:py-32 max-w-[1280px] w-full mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                    <div className="lg:col-span-5 visual-text-reveal">
                        <h2 className="text-3xl lg:text-5xl font-heading mb-8">A Visual Symphony</h2>
                        <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base">
                            <p>Inspired by sophisticated and sustainable urban design, with luxury finishes and artistic spaces, homes at The Lofts truly epitomise lifestyle and tranquillity.</p>
                            <p>Exclusive condominiums in the heart of The Pearl Qatar with proximity to luxury brands, and an abundance of shopping, entertainment, culinary & cultural experiences, it's the home you've always dreamed of.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[700px] w-full overflow-hidden rounded-[8px] shadow-sm bg-[#EAEAEA]">
                        <img 
                            src={details.visualSymphonyImage}
                            alt="Visual Symphony" 
                            className="visual-image w-full h-full object-cover" 
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center z-10">
                            <button className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 left-4 flex items-center z-10">
                            <button className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Global Floor Plans overview */}
            <section ref={globalFloorplanRef} className="py-24 md:py-32 bg-white overflow-hidden border-t border-[var(--color-border-color)]">
                <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8 flex flex-col global-floorplan-reveal">
                    
                    {/* Elegant Borderless Floor Tabs Full Width */}
                    <div className="w-full flex justify-between gap-8 mb-20 text-[11px] md:text-[13px] font-semibold uppercase tracking-widest overflow-x-auto scrollbar-hide">
                        {['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor', 'Fourth Floor', 'Fifth Floor', 'Sixth Floor'].map((floor) => (
                            <button 
                                key={floor}
                                onClick={() => setActiveTab(floor)}
                                className={cn(
                                    "pb-4 transition-all duration-300 min-w-max relative",
                                    activeTab === floor 
                                        ? "text-black" 
                                        : "text-black/40 hover:text-black/70"
                                )}
                            >
                                {floor}
                                {activeTab === floor && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 relative mt-4">
                        {/* Left: 3D or schematic Image Card */}
                        <div className="w-full lg:w-[55%] relative flex justify-center items-center py-16 px-10 bg-[#FAFAFA] rounded-[48px] border border-black/[0.03] group min-h-[500px]">
                            
                            <img 
                                src={activeTab === 'Ground Floor' ? '/floor_plan_ground.svg' : '/floor_plan_typical.svg'} 
                                alt="Building floor plan overview" 
                                className="w-full h-auto mix-blend-multiply transition-transform duration-700 max-h-[600px] object-contain group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Right: Vertical Interactive Legend List */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-center">
                            <h4 className="text-3xl md:text-[2.2rem] font-heading mb-8 text-black border-b border-black/10 pb-8 uppercase whitespace-nowrap">Unit Types on {activeTab}</h4>
                            
                            <div className="flex flex-col pt-4">
                                {[
                                    { name: '3 Bedroom Loft Residences', color: '#88B8BD' },
                                    { name: '2 Bedroom Loft Residences', color: '#D4A373' },
                                    { name: '2 Bedroom Residences', color: '#A5BC99' },
                                    { name: '1 Bedroom Residences', color: '#ECE0D1' },
                                    { name: 'Studio Apartments', color: '#AAA18F' },
                                ].map((item, index) => (
                                    <div key={index} className="group flex items-center justify-between py-[22px] cursor-pointer transition-colors duration-300">
                                        <div className="flex items-center gap-6">
                                            <span className="w-[18px] h-[18px] rounded-full shadow-inner" style={{ backgroundColor: item.color }}></span> 
                                            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.12em] text-[#666666] group-hover:text-black uppercase transition-colors">{item.name}</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-black/20 group-hover:text-black transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Features */}
            <section ref={featuresRef} className="py-24 md:py-32 w-full mx-auto px-5 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-heading mb-16 md:mb-24 text-center max-w-[800px] mx-auto leading-tight">
                    Elegant, refined, ample and intuitively designed.
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-0 max-w-[1100px] mx-auto">
                    {features.map((feature, i) => (
                        <div 
                            key={i} 
                            className="feature-item py-6 border-b border-dotted border-black/20 text-[13px] md:text-[14px] font-medium tracking-wide text-[var(--color-text-primary)] leading-snug"
                        >
                            {feature}
                        </div>
                    ))}
                </div>
            </section>

            {/* Virtual Walkthrough Section */}
            <section className="py-24 md:py-32 bg-[var(--color-background-light)] border-y border-[var(--color-border-color)]">
                <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-heading mb-6 tracking-tight">Virtual Walkthrough</h2>
                        <p className="text-[var(--color-text-muted)] text-sm md:text-base max-w-[600px] leading-relaxed">
                            Step inside and experience the exquisite craftsmanship, sweeping views, and impeccable design of your future residence.
                        </p>
                    </div>
                    
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer border border-black/5" onClick={togglePlay}>
                        <video 
                            ref={videoRef}
                            src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-interior-video-4178-large.mp4" 
                            className="w-full h-full object-cover transform transition-transform duration-[10s] ease-out group-hover:scale-105"
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                        />
                        {/* Play/Pause Overlay Component */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110">
                                {isPlaying ? (
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
                                ) : (
                                    <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Specific Residence Layout */}
            <section ref={layoutsRef} className="py-24 md:py-32 bg-white flex justify-center border-b border-[var(--color-border-color)]">
                <div className="max-w-[1280px] w-full mx-auto px-5 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 layout-reveal gap-8 border-b border-black/5 pb-12 w-full">
                        <div>
                            <h2 className="text-3xl lg:text-[4rem] font-heading mb-6 tracking-tight leading-none text-black">Residence<br/>Layouts</h2>
                        </div>
                        
                        {/* Elegant Pills for Tabs specific to Residence Layouts */}
                        <div className="flex bg-[#F5F5F5] p-1.5 rounded-[12px] md:rounded-full overflow-hidden shadow-inner w-full md:w-max flex-wrap md:flex-nowrap">
                            {details.residenceFloors.map((floor) => (
                                <button 
                                    key={floor}
                                    onClick={() => setActiveResFloor(floor)}
                                    className={cn(
                                        "px-4 md:px-8 py-3 text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold transition-all duration-300 rounded-full flex-grow md:flex-grow-0",
                                        activeResFloor === floor 
                                            ? "bg-black text-white shadow-md transform scale-100" 
                                            : "text-black/50 hover:text-black hover:bg-white"
                                    )}
                                >
                                    {floor}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main rounded container */}
                    <div className="layout-reveal w-full bg-[#FAFAFA] rounded-[48px] p-12 md:p-24 shadow-[0_4px_40px_rgba(0,0,0,0.02)] border border-black/[0.03] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative overflow-hidden">
                        
                        {/* Left Side: Stats */}
                        <div className="flex flex-col w-full lg:w-[45%] h-full justify-center lg:pr-10 min-h-[300px]">
                            <h3 className="text-4xl lg:text-[4rem] font-heading mb-3 text-black leading-tight transition-opacity duration-300">
                                {currentSpecificLayout.title}
                            </h3>
                            <span className="block text-lg md:text-[17px] font-sans font-medium text-black/40 tracking-[0.15em] shadow-sm uppercase mb-12 pb-12 border-b border-black/10 max-w-[80%] transition-opacity duration-300">
                                {activeResFloor}
                            </span>
                            
                            <div className="grid grid-cols-2 gap-8 gap-y-12">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <Layers className="w-4 h-4 text-black/30" strokeWidth={2} />
                                        <p className="uppercase text-[10px] tracking-widest font-bold text-black/40">No. of Units</p>
                                    </div>
                                    <p className="text-3xl font-light text-black transition-opacity duration-300">{currentSpecificLayout.units}</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <Grid className="w-4 h-4 text-black/30" strokeWidth={2} />
                                        <p className="uppercase text-[10px] tracking-widest font-bold text-black/40">Amenity</p>
                                    </div>
                                    <p className="text-3xl font-light text-black tracking-wide transition-opacity duration-300">{currentSpecificLayout.amenity}</p>
                                </div>
                                <div className="flex flex-col col-span-2 pt-2">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <Maximize2 className="w-4 h-4 text-black/30" strokeWidth={2} />
                                        <p className="uppercase text-[10px] tracking-widest font-bold text-black/40">Total Area</p>
                                    </div>
                                    <p className="text-4xl lg:text-5xl font-light text-black mt-2 break-words transition-opacity duration-300">
                                        {currentSpecificLayout.totalArea.replace(' SQM.', '')} 
                                        <span className="text-lg uppercase tracking-widest ml-1 font-semibold text-black/60">SQM.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Map Display */}
                        <div className="w-full lg:w-[55%] relative group z-10">
                            
                            {/* Navigation Buttons placed neatly OUTSIDE the white card */}
                            {activeLayoutsArray.length > 1 && (
                                <>
                                    <button onClick={handlePrevLayout} className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-full flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-all z-20 hover:scale-105">
                                        <ChevronLeft className="w-6 h-6 ml-[-2px]" strokeWidth={1.5} />
                                    </button>
                                    
                                    <button onClick={handleNextLayout} className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white border-2 border-[#1E60D9] text-[#1E60D9] shadow-[0_4px_20px_rgba(11,88,230,0.1)] rounded-full flex items-center justify-center transition-all z-20 hover:scale-105 hover:bg-[#1E60D9] hover:text-white">
                                        <ChevronRight className="w-6 h-6 mr-[-2px]" strokeWidth={1.5} />
                                    </button>
                                </>
                            )}

                            {/* Pagination Dots indicator */}
                            {activeLayoutsArray.length > 1 && (
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                                    {activeLayoutsArray.map((_, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setActiveLayoutIdx(idx)}
                                            className={cn("w-2 h-2 rounded-full transition-colors duration-300", activeLayoutIdx === idx ? "bg-black" : "bg-black/20 hover:bg-black/40")}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* White Map Card */}
                            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] flex items-center justify-center p-10 bg-white shadow-xl shadow-black/5 rounded-[40px] transition-transform duration-700 mx-auto overflow-hidden border border-black/[0.02]">
                                
                                <img 
                                    key={`${activeResFloor}-${activeLayoutIdx}`} // force re-render transition
                                    src={currentSpecificLayout.image}
                                    alt={currentSpecificLayout.title} 
                                    className="w-[90%] h-[90%] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.03] animate-in fade-in zoom-in-95 duration-500" 
                                />

                                {/* Preview Button Floating correctly in center */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                                    <div className="bg-black text-white px-8 py-5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase shadow-2xl flex items-center gap-3 pointer-events-auto cursor-pointer hover:bg-black/90 transition-all transform hover:scale-105 duration-300">
                                        <Maximize2 className="w-4 h-4" /> Preview Layout
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. Contact Form Section */}
            <section ref={contactRef} className="py-24 md:py-32 w-full mx-auto px-5 lg:px-8 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="contact-reveal-left flex flex-col justify-start pt-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-8 leading-tight">
                            Want to learn more?<br/>Schedule time with our <br className="hidden lg:block"/>team now.
                        </h2>
                        <p className="text-[var(--color-text-muted)] text-[15px] leading-[1.8] max-w-[500px]">
                            Experience the property in person or virtually with a private guided tour. Select a convenient time, and our team will walk you through every detail so you can see why this could be your next home or investment.
                        </p>
                    </div>

                    <div className="contact-reveal-right">
                        <div>
                            
                            {/* Toggle */}
                            <div className="flex w-full md:w-max mb-12 border border-[#EAEAEA] rounded-[4px] overflow-hidden ml-auto mr-0">
                                <button 
                                    className={cn("px-12 py-4 text-xs tracking-widest uppercase font-semibold transition-colors", contactType === 'In-Person' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black hover:bg-black/5')}
                                    onClick={() => setContactType('In-Person')}
                                >
                                    In-Person
                                </button>
                                <button 
                                    className={cn("px-12 py-4 text-xs tracking-widest uppercase font-semibold transition-colors", contactType === 'Virtual' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black hover:bg-black/5')}
                                    onClick={() => setContactType('Virtual')}
                                >
                                    Virtual
                                </button>
                            </div>

                            {/* Form */}
                            {!isSubmitted ? (
                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                                    <div className="space-y-3">
                                        <label className="text-[11px] uppercase tracking-widest font-semibold flex items-center justify-between text-black/80">
                                            <span>Name <span className="text-red-500">*</span></span>
                                        </label>
                                        <div className="relative">
                                            <input required minLength={2} type="text" placeholder="e.g. John" className="peer w-full bg-[#EEEEEE] border-b border-transparent rounded-[4px] py-[18px] px-5 text-[15px] focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50" />
                                            <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5">Full name is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <label className="text-[11px] uppercase tracking-widest font-semibold flex items-center justify-between text-black/80">
                                            <span>Phone Number <span className="text-red-500">*</span></span>
                                        </label>
                                        <div className="relative flex">
                                            <div className="bg-[#E5E5E5] border-none rounded-l-[4px] py-[18px] px-5 flex items-center justify-center text-sm font-medium z-10 relative">
                                                <span>🇶🇦 ▾</span>
                                            </div>
                                            <input required type="tel" pattern="^\+?[0-9\s\-()]{7,20}$" placeholder="+974 4491 3333" className="peer w-full bg-[#EEEEEE] border-b border-transparent rounded-r-[4px] py-[18px] px-5 text-[15px] focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50" title="Valid phone number required" />
                                            <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5 left-[70px]">Valid phone required</p>
                                        </div>
                                    </div>
    
                                    <div className="space-y-3">
                                        <label className="text-[11px] uppercase tracking-widest font-semibold flex items-center justify-between text-black/80">
                                            <span>Email Address <span className="text-red-500">*</span></span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#51B19B]">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <input required type="email" placeholder="john@youremail.com" className="peer w-full bg-[#EEEEEE] border-b border-transparent rounded-[4px] py-[18px] px-5 text-[15px] focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50" />
                                            <p className="mt-1 hidden peer-invalid:[&:not(:placeholder-shown):not(:focus)]:block text-red-500 text-[10px] uppercase font-bold tracking-widest absolute -bottom-5">Valid email required</p>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[11px] uppercase tracking-widest font-semibold flex items-center justify-between text-black/80">
                                                <span>Preferred Date <span className="text-red-500">*</span></span>
                                            </label>
                                            <div className="relative">
                                                <input required type="text" placeholder="DD / MM / YYYY" className="w-full bg-[#EEEEEE] border-none rounded-[4px] py-[18px] px-5 text-[14px] focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-black/30" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] uppercase tracking-widest font-semibold flex items-center justify-between text-black/80">
                                                <span>Preferred Time <span className="text-red-500">*</span></span>
                                            </label>
                                            <div className="relative">
                                                <input required type="text" placeholder="--:--" className="w-full bg-[#EEEEEE] border-none rounded-[4px] py-[18px] px-5 text-[14px] focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-black/30" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="pt-4 flex w-full">
                                        <Button type="submit" variant="outline" className="ml-auto mr-auto md:mr-0 md:ml-auto w-[240px] py-[28px] uppercase tracking-[0.15em] text-[11px] font-semibold flex items-center justify-center border-black/20 hover:bg-black hover:text-white transition-colors cursor-pointer">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="w-full h-full min-h-[400px] flex flex-col items-start justify-center py-10 px-0 rounded-xl animate-in fade-in zoom-in duration-500 text-left relative z-20">
                                    <div className="w-16 h-16 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-heading mb-3 text-black">Inquiry Received</h3>
                                    <p className="text-black/60 text-sm max-w-sm leading-relaxed mb-8">Thank you! Our dedicated sales team has received your request for {contactType.toLowerCase()} viewing. We will contact you shortly.</p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="uppercase tracking-[0.15em] text-[10px] font-bold px-8 py-6 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors cursor-pointer">
                                        Submit Another
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* 7. Global CTA */}
            <GlobalCTA />
        </div>
    );
}
