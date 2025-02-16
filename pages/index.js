import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMotionValue, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";
import WatchCursor from "../components/WatchCursor";
import Movement from "../components/videoModals/Movement";
import NextImage from "next/image";
import WellDone from "../components/videoModals/WellDone";
import Olipop from "../components/videoModals/Olipop";
import Nike from "../components/videoModals/Nike";
import NonEssentials from "../components/videoModals/NonEssentials";
import BSHigh from "../components/videoModals/BSHigh";
import BonJovi from "../components/videoModals/BonJovi";
import Olympics from "../components/videoModals/Olympics";
import Trailers from "../components/videoModals/Trailers";
import Lizzo from "../components/videoModals/Lizzo";
import Meta from "../components/videoModals/Meta";
import ViewCursor from "../components/ViewCursor";
import Shorts from "../components/videoModals/Shorts";
import NakedCashmere from "../components/videoModals/NakedCashmere";

export default function Home() {

    const yPosition = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [showViewCursor, setShowViewCursor] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile devices
        };

        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);

        return () => {
            window.removeEventListener("resize", updateIsMobile);
        };
    }, []);

    const handleMouseEnter = () => {
        setShowCursor(true);
    };
    const handleMouseEnterView = () => {
        setShowViewCursor(true);
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };
    const handleMouseLeaveView = () => {
        setShowViewCursor(false);
    };

    useEffect(() => {
        const scrollFactor = 0.5; // Adjust the factor to slow down the scroll
    
        const handleWheel = (e) => {
          e.preventDefault();
          window.scrollBy(0, e.deltaY * scrollFactor);
        };
    
        // Attach the event listener
        window.addEventListener('wheel', handleWheel, { passive: false });
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('wheel', handleWheel);
        };
      }, []);

    const [showScroll, setShowScroll] = useState(true);
    const [playCreator, setPlayCreator] = useState(false);
    const [playDirector, setPlayDirector] = useState(false);
    const [playCine, setPlayCine] = useState(false);
    const [playEditor, setPlayEditor] = useState(false);
    const [showCreator, setShowCreator] = useState(false);
    const [showMonitor, setShowMonitor] = useState(false);
    const [showOverhead1, setShowOverhead1] = useState(false);
    const [showOverhead2, setShowOverhead2] = useState(false);
    const [showOverhead3, setShowOverhead3] = useState(false);
    const [showTds1, setShowTds1] = useState(false);
    const [showTds2, setShowTds2] = useState(false);
    const [showTds3, setShowTds3] = useState(false);
    const [showTv, setShowTv] = useState(false);
    const [showWiz1, setShowWiz1] = useState(false);
    const [showWiz2, setShowWiz2] = useState(false);
    const [showLizzo, setShowLizzo] = useState(false);

    useMotionValueEvent(yPosition, "change", (latest) => {
        if ( latest < 0.001 ) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }

        if (latest > 0.001 && latest < 0.076) {
            setShowCreator(true);
        } else {
            setShowCreator(false);
        }

        if ( latest > 0.08 && latest < 0.2) {
            setShowMonitor(true);
        } else {
            setShowMonitor(false);
        }

        if ( latest > 0.2 && latest < 0.25 ) {
            setShowOverhead1(true);
        } else {
            setShowOverhead1(false);
        }

        if ( latest > 0.15 && latest < 0.2 ) {
            setShowOverhead2(true);
        } else {
            setShowOverhead2(false);
        }

        if ( latest > 0.25 && latest < 0.3 ) {
            setShowOverhead3(true);
        } else {
            setShowOverhead3(false);
        }

        if ( latest > 0.45 && latest < 0.5 ) {
            setShowTds1(true);
        } else {
            setShowTds1(false);
        }

        if ( latest > 0.5 && latest < 0.55 ) {
            setShowTds2(true);
        } else {
            setShowTds2(false);
        }

        if ( latest > 0.55 && latest < 0.65 ) {
            setShowTds3(true);
        } else {
            setShowTds3(false);
        }

        if ( latest > 0.75 && latest < 0.85 ) {
            setShowTv(true);
        } else {
            setShowTv(false);
        }

        if ( latest > 0.85 && latest < 0.9 ) {
            setShowWiz1(true);
        } else {
            setShowWiz1(false);
        }

        if ( latest > 0.9 && latest < 0.95 ) {
            setShowWiz2(true);
        } else {
            setShowWiz2(false);
        }

        if ( latest > 0.95 && latest < 1 ) {
            setShowLizzo(true);
        } else {
            setShowLizzo(false);
        }

        if ( latest > 0.076 && latest < 0.077 ) {
            setPlayCreator(true);
        } else {
            setPlayCreator(false);
        }

        if ( latest > 0.38 && latest < 0.39 ) {
            setPlayDirector(true);
        } else {
            setPlayDirector(false);
        }

        if ( latest > 0.69 && latest < 0.7) {
            setPlayCine(true);
        } else {
            setPlayCine(false);
        }

        if ( latest == 1 ) {
            setPlayEditor(true);
        } else {
            setPlayEditor(false);
        }

        console.log("Page scroll: ", latest);
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        const container = document.querySelector(".container");

        ScrollTrigger.defaults({
            markers: false, // Disable debug markers for better performance
            fastScrollEnd: true, // Ends scrolling quickly on touch devices
            preventOverlaps: true, // Prevent animations from overlapping on fast scrolls
        });

        if (isMobile) {
            // Vertical scroll on mobile
            const snapPoints = [0, 0.07644, 0.3844, 0.69236, 1];

            gsap.to(sections, {
                yPercent: -100 * 3.2475,
                ease: "none",
                duration: 0.5,
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 0.5,
                    snap: {
                        snapTo: (progress) => {
                            const closest = snapPoints.reduce((prev, curr) =>
                                Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
                            );
                            return closest;
                        },
                        duration: 0.8,
                        ease: "power1.inOut",
                    },
                    start: "top top",
                    end: `+=${sections.length * window.innerHeight}`,
                    onUpdate: (self) => yPosition.set(self.progress),
                },
            });
        } else {
            const containerWidth = document.querySelector(".container").offsetWidth;
            const snapPoints = [0, 0.07644, 0.3844, 0.69236, 1];

            gsap.to(sections, {
                xPercent: -100 * 3.2475,
                ease: "none",
                duration: 0.5,
                scrollTrigger: {
                    trigger: document.querySelector(".container"),
                    pin: true,
                    scrub: 0,
                    snap: {
                        snapTo: (progress) => {
                            // Find the closest snap point in the array
                            const closest = snapPoints.reduce((prev, curr) =>
                                Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
                            );
                            return closest; // Return the closest snap point
                        },
                        duration: 0.8,
                        delay: 0,
                        ease: "power1.inOut",
                    },
                    start: "top top",
                    end: `+=${containerWidth}`,
                    onUpdate: (self) => yPosition.set(self.progress),
                },
            });
        }
        // gsap.from(".panel", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        
        return () => {
            ScrollTrigger.killAll(); // Clean up ScrollTrigger
        };
    }, [isMobile]);

    // WATCH MODALS
    const [movementOpen, setMovementOpen] = useState(false);
    const [wellDoneOpen, setWellDoneOpen] = useState(false);
    const [olipopOpen, setOlipopOpen] = useState(false);
    const [nikeOpen, setNikeOpen] = useState(false);
    const [essentialsOpen, setEssentialsOpen] = useState(false);
    const [bsHighOpen, setBsHighOpen] = useState(false);
    const [bonJoviOpen, setBonJoviOpen] = useState(false);
    const [olympicsOpen, setOlympicsOpen] = useState(false);
    const [trailersOpen, setTrailersOpen] = useState(false);
    const [lizzoOpen, setLizzoOpen] = useState(false);
    const [metaOpen, setMetaOpen] = useState(false);
    const [shortsOpen, setShortsOpen] = useState(false);
    const [nakedOpen, setNakedOpen] = useState(false);

    const toggleMovement = () => {
        setMovementOpen(!movementOpen);
    };
    const toggleWellDone = () => {
        setWellDoneOpen(!wellDoneOpen);
    };
    const toggleOlipop = () => {
        setOlipopOpen(!olipopOpen);
    };
    const toggleNike = () => {
        setNikeOpen(!nikeOpen);
    };
    const toggleEssentials = () => {
        setEssentialsOpen(!essentialsOpen);
    };
    const toggleBsHighOpen = () => {
        setBsHighOpen(!bsHighOpen);
    };
    const toggleBonJoviOpen = () => {
        setBonJoviOpen(!bonJoviOpen);
    };
    const toggleOlympics = () => {
        setOlympicsOpen(!olympicsOpen);
    };
    const toggleTrailers = () => {
        setTrailersOpen(!trailersOpen);
    };
    const toggleLizzo = () => {
        setLizzoOpen(!lizzoOpen);
    };
    const toggleMeta = () => {
        setMetaOpen(!metaOpen);
    };
    const toggleShorts = () => {
        setShortsOpen(!shortsOpen);
    };
    const toggleNaked = () => {
        setNakedOpen(!nakedOpen);
    };

    return (
        <div>
        {/* <div className="container flex w-[533.32vw] max-w-[533.32vw] overflow-x-hidden overflow-y-auto"> */}
        <div className={`container ${
                    isMobile ? "flex flex-col h-[533.32vh] max-h-[533.32vh]" : "flex w-[533.32vw] max-w-[533.32vw]"
                } overflow-hidden`} >

            {/* CROP */}
            {!isMobile && <div className="fixed w-screen top-0 bg-black z-20 h-[60px]" />}
            {!isMobile && <div className="fixed w-screen bottom-0 bg-black z-20 h-[60px]" />}


            {/* CURSOR */}

            {showCursor && <WatchCursor />}
            {showViewCursor && <ViewCursor />}

            {/* STILL IMAGES */}
            
            <div className="absolute top-0 left-0 w-screen h-screen z-30">
            {showCreator && <NextImage src="/stills/creator.png" fill className="object-cover"/>}
            {showOverhead1 && <NextImage src="/stills/overhead1.png" fill className="object-cover"/>}
            {showOverhead2 && <NextImage src="/stills/overhead2.png" fill className="object-cover"/>}
            {showOverhead3 && <NextImage src="/stills/overhead3.png" fill className="object-cover"/>}
            {showTds1 && <NextImage src="/stills/tds1.png" fill className="object-cover"/>}
            {showTds2 && <NextImage src="/stills/tds2.png" fill className="object-cover"/>}
            {showTds3 && <NextImage src="/stills/tds3.png" fill className="object-cover"/>}
            {showWiz1 && <NextImage src="/stills/wiz1.png" fill className="object-cover"/>}
            {showWiz2 && <NextImage src="/stills/wiz2.png" fill className="object-cover"/>}
            {showLizzo && <NextImage src="/stills/lizzo.png" fill className="object-cover"/>}
            {showMonitor && <video autoPlay muted loop playsInline src="stills/Monitor-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}
            {showTv && <video autoPlay muted loop playsInline src="stills/TV-1-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}
            </div>

            {/* MENUS */}

            {/* CREATOR */}
            
            {playCreator && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-2xl md:text-4xl text-white font-display z-50 px-4 md:px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <button onClick={() => toggleEssentials()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">The Non-Essentials</button>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <a href="https://www.settlingtheshow.com/" target="_blank" onMouseEnter={handleMouseEnterView} onMouseLeave={handleMouseLeaveView} className="hover:cursor-none">Settling</a>
                </div>
            </div>
            )}
            
            {/* DIRECTOR */}
            {playDirector && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-2xl md:text-4xl text-white font-display z-50 px-4 md:px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <button onClick={() => toggleOlipop()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Olipop</button>
                    <Link href="" onClick={() => toggleNike()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Nike</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button onClick={() => toggleMovement()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Movement</button>
                    <button onClick={() => toggleWellDone()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Well Done</button>
                </div>
            </div>
            )}
            
            {/* CINEMATOGRAPHER */}
            {playCine && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-2xl md:text-4xl text-white font-display z-50 px-4 md:px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <button onClick={() => toggleBsHighOpen()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">BS High</button>
                    <button onClick={() => toggleBonJoviOpen()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Bon Jovi</button>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button onClick={() => toggleShorts()} onMouseEnter={handleMouseEnterView} onMouseLeave={handleMouseLeaveView} className="hover:cursor-none">Shorts</button>
                    <button onClick={() => toggleNaked()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Naked Cashmere</button>
                </div>
            </div>
            )}

            {/* EDITOR */}
            {playEditor && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-2xl md:text-4xl text-white font-display z-50 px-4 md:px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <button onClick={() => toggleOlympics()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Olympics</button>
                    <button onClick={() => toggleTrailers()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Trailers</button>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button onClick={() => toggleLizzo()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Lizzo</button>
                    <button onClick={() => toggleMeta()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Meta</button>
                </div>
            </div>
            )}
            
            {/* TITLES AND REELS */}

            {/* CREATOR */}
            <div className={`panel ${isMobile ? "h-[133vh] w-screen" : "w-[133vw] h-screen"} relative`} style={{willChange: "transform"}}>
                <div className={`absolute top-0 left-0 w-full h-full flex ${isMobile ? " flex-col" : ""}`}>
                    {/* CREATOR TITLE */}
                    <div className={`${isMobile ? "h-[33vh] w-screen" : "w-[33vw] h-screen"} relative`}>
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline preload="auto" src="/creator_banner.mp4" />
                        <div className="absolute top-0 left-0 w-full h-full object-cover flex flex-col items-center justify-center text-7xl xl:text-8xl font-banner animate-blink text-white">Creator</div>
                    </div>
                    <div className={`${isMobile ? "h-[100vh] w-screen" : "w-[100vw] h-screen"} reel relative`}>
                        {/* CREATOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/creator_still.mp4" />
                        {/* CREATOR REEL */}
                        {playCreator && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/creator_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* DIRECTOR */}
            <div className={`panel ${isMobile ? "h-[133vh] w-screen" : "w-[133vw] h-screen"} relative`}>
                <div className={`absolute top-0 left-0 w-full h-full flex ${isMobile ? " flex-col" : ""}`}>
                    {/* DIRECTOR TITLE */}
                    <div className={`${isMobile ? "h-[33vh] w-screen" : "w-[33vw] h-screen"} relative`}>
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline preload="auto" src="/director_banner.mp4" />
                        <div className="absolute top-0 left-0 w-full h-full object-cover flex flex-col items-center justify-center text-7xl xl:text-8xl font-banner animate-blink text-white">Director</div>
                    </div>
                    <div className={`${isMobile ? "h-[100vh] w-screen" : "w-[100vw] h-screen"} reel relative`}>
                        {/* DIRECTOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/directing_still.mp4" />
                        {/* DIRECTOR REEL */}
                        {playDirector && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/directing_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* CINEMATOGRAPHER */}
            <div className={`panel ${isMobile ? "h-[133vh] w-screen" : "w-[133vw] h-screen"} relative`}>
                <div className={`absolute top-0 left-0 w-full h-full flex ${isMobile ? " flex-col" : ""}`}>
                    {/* CINEMATOGRAPHER TITLE */}
                    <div className={`${isMobile ? "h-[33vh] w-screen" : "w-[33vw] h-screen"} relative`}>
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline preload="auto" src="/cine_banner.mp4" />
                        <div className="absolute top-0 left-0 w-full h-full object-cover flex flex-col items-center justify-center text-7xl xl:text-8xl font-banner animate-blink text-white">Cinematographer</div>
                    </div>
                    <div className={`${isMobile ? "h-[100vh] w-screen" : "w-[100vw] h-screen"} reel relative`}>
                        {/* CINEMATOGRAPHER STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/cine_still.mp4" />
                        {/* CINEMATOGRAPHER REEL */}
                        {playCine && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/cine_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* EDITOR */}
            <div className={`panel ${isMobile ? "h-[133vh] w-screen" : "w-[133vw] h-screen"} relative`}>
                <div className={`absolute top-0 left-0 w-full h-full flex ${isMobile ? " flex-col" : ""}`}>
                    {/* EDITOR TITLE */}
                    <div className={`${isMobile ? "h-[33vh] w-screen" : "w-[33vw] h-screen"} relative`}>
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline preload="auto" src="/editor_banner.mp4" />
                        <div className="absolute top-0 left-0 w-full h-full object-cover flex flex-col items-center justify-center text-7xl xl:text-8xl font-banner animate-blink text-white">Editor</div>
                    </div>
                    <div className={`${isMobile ? "h-[100vh] w-screen" : "w-[100vw] h-screen"} reel relative`}>
                        {/* EDITOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/editing_still.mp4" />
                        {/* EDITOR REEL */}
                        {playEditor && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline preload="auto" src="/editing_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>
    
        </div>
        <Movement open={movementOpen} toggle={toggleMovement} />
        <WellDone open={wellDoneOpen} toggle={toggleWellDone} />
        <Olipop open={olipopOpen} toggle={toggleOlipop} />
        <Nike open={nikeOpen} toggle={toggleNike} />
        <NonEssentials open={essentialsOpen} toggle={toggleEssentials} />
        <BSHigh open={bsHighOpen} toggle={toggleBsHighOpen} />
        <BonJovi open={bonJoviOpen} toggle={toggleBonJoviOpen} />
        <Olympics open={olympicsOpen} toggle={toggleOlympics} />
        <Trailers open={trailersOpen} toggle={toggleTrailers} />
        <Lizzo open={lizzoOpen} toggle={toggleLizzo} />
        <Meta open={metaOpen} toggle={toggleMeta} />
        <Shorts open={shortsOpen} toggle={toggleShorts} />
        <NakedCashmere open={nakedOpen} toggle={toggleNaked} />
                    
        {/* SCROLL  */}
        {showScroll && <Button>Scroll</Button>}
        </div>
    )
}