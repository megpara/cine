import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";
import WatchCursor from "../components/WatchCursor";
import MovementModal from "../components/videoModals/MovementModal";
import Image from "next/image";

export default function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [showCursor, setShowCursor] = useState(false);

    const handleMouseEnter = () => {
        setShowCursor(true);
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };

    const [showScroll, setShowScroll] = useState(true);
    const [playCreator, setPlayCreator] = useState(false);
    const [playDirector, setPlayDirector] = useState(false);
    const [playCine, setPlayCine] = useState(false);
    const [playEditor, setPlayEditor] = useState(false);
    const [showMonitor, setShowMonitor] = useState(false);
    const [showOverhead1, setShowOverhead1] = useState(false);
    const [showOverhead2, setShowOverhead2] = useState(false);
    const [showOverhead3, setShowOverhead3] = useState(false);
    const [showTds1, setShowTds1] = useState(false);
    const [showTds2, setShowTds2] = useState(false);
    const [showTds3, setShowTds3] = useState(false);
    const [showDj1, setShowDj1] = useState(false);
    const [showDj2, setShowDj2] = useState(false);
    const [showDj3, setShowDj3] = useState(false);
    const [showTv, setShowTv] = useState(false);
    const [showWiz1, setShowWiz1] = useState(false);
    const [showWiz2, setShowWiz2] = useState(false);
    const [showLizzo, setShowLizzo] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if ( latest == 0 ) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
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

        if ( latest > 0.7 && latest < 0.75 ) {
            setShowDj1(true);
        } else {
            setShowDj1(false);
        }

        if ( latest > 0.75 && latest < 0.8 ) {
            setShowDj2(true);
        } else {
            setShowDj2(false);
        }

        if ( latest > 0.8 && latest < 0.85 ) {
            setShowDj3(true);
        } else {
            setShowDj3(false);
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

        // ALL SLIGHTLY OFF FOR MOBILE
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
        const containerWidth = document.querySelector(".container").offsetWidth;

        gsap.to(sections, {
            xPercent: -100 * 3.2475,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: document.querySelector(".container"),
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: [0, 0.07644, 0.3844, 0.69236, 1],
                    // directional: false,
                },
                end: `+=${containerWidth}`,
                // onUpdate: (self) => document.getElementById("white").style.width = ((self.progress * 100 / 4) + "%"),
            },
        })
        gsap.from(".panel", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        
    }, [])

    // WATCH MODALS
    const [movementOpen, setMovementOpen] = useState(false);

    const toggleMovement = () => {
        setMovementOpen(!movementOpen);
    };

    return (
        <div>
        <div className="container flex w-[532vw] max-w-[532vw] overflow-x-hidden overflow-y-auto">

            {/* CROP */}

            <div className="fixed w-screen top-0 bg-black z-20 h-[60px]"></div>
            <div className="fixed w-screen bottom-0 bg-black z-20 h-[60px]"></div>

            {/* SCROLL  */}

            {showScroll && <Button>Scroll</Button>}

            {/* CURSOR */}

            {showCursor && <WatchCursor />}

            {/* STILL IMAGES */}
            
            <div className="absolute top-0 left-0 w-screen h-screen z-30">
            {/* <img src="stills/crop.png" className="absolute w-full h-full top-0 left-0 z-20" /> */}
            {showOverhead1 && <Image src="/stills/overhead1.png" fill className="object-cover"/>}
            {showOverhead2 && <Image src="/stills/overhead2.png" fill className="object-cover"/>}
            {showOverhead3 && <Image src="/stills/overhead3.png" fill className="object-cover object-right"/>}
            {showTds1 && <Image src="/stills/tds1.png" fill className="object-cover"/>}
            {showTds2 && <Image src="/stills/tds2.png" fill className="object-cover"/>}
            {showTds3 && <Image src="/stills/tds3.png" fill className="object-cover"/>}
            {/* {showDj1 && <img src="stills/dj1.png" fill/>}
            {showDj2 && <img src="stills/dj2.png" fill/>}
            {showDj3 && <img src="stills/dj3.png" fill/>} */}
            {showWiz1 && <Image src="/stills/wiz1.png" fill className="object-cover object-right"/>}
            {showWiz2 && <Image src="/stills/wiz2.png" fill className="object-cover object-right"/>}
            {showLizzo && <Image src="/stills/lizzo.png" fill className="object-cover object-right"/>}
            {showMonitor && <video autoPlay muted loop playsInline src="stills/Monitor-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}
            {showTv && <video autoPlay muted loop playsInline src="stills/TV-1-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}
            </div>

            {/* MENUS */}

            {/* CREATOR */}
            
            {playCreator && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-50 px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Non Essentials</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <a href="https://www.settlingtheshow.com/" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Settling</a>
                </div>
            </div>
            )}
            
            {/* DIRECTOR */}
            {playDirector && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-50 px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Olipop</Link>
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Nike</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button onClick={() => toggleMovement()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Movement</button>
                    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Well Done</button>
                </div>
            </div>
            )}
            
            {/* CINEMATOGRAPHER */}
            {playCine && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-50 px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">BS High</Link>
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Bon Jovi</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Milquetoast</Link>
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Naked Cashmere</Link>
                </div>
            </div>
            )}

            {/* EDITOR */}
            {playEditor && (
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-50 px-16 py-24"}>
                <div className="flex flex-col justify-between">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Olympics</Link>
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Trailers</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Lizzo</Link>
                    <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-none">Meta</Link>
                </div>
            </div>
            )}
            
            {/* TITLES AND REELS */}

            {/* CREATOR */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {/* CREATOR TITLE */}
                    <div className="w-[33vw] h-screen relative">
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline src="/editing_banner.mp4" />
                    </div>
                    <div className="w-[100vw] h-screen reel relative">
                        {/* CREATOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/editing_still.mp4" />
                        {/* CREATOR REEL */}
                        {playCreator && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/editing_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* DIRECTOR */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {/* DIRECTOR TITLE */}
                    <div className="w-[33vw] h-screen relative">
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline src="/directing_banner.mp4" />
                    </div>
                    <div className="w-[100vw] h-screen reel relative">
                        {/* DIRECTOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/directing_still.mp4" />
                        {/* DIRECTOR REEL */}
                        {playDirector && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/directing_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* CINEMATOGRAPHER */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {/* CINEMATOGRAPHER TITLE */}
                    <div className="w-[33vw] h-screen relative">
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline src="/cine_banner.mp4" />
                    </div>
                    <div className="w-[100vw] h-screen reel relative">
                        {/* CINEMATOGRAPHER STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/cine_still.mp4" />
                        {/* CINEMATOGRAPHER REEL */}
                        {playCine && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/cine_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>

            {/* EDITOR */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {/* EDITOR TITLE */}
                    <div className="w-[33vw] h-screen relative">
                        <video className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" muted autoPlay loop playsInline src="/editing_banner.mp4" />
                    </div>
                    <div className="w-[100vw] h-screen reel relative">
                        {/* EDITOR STILL */}
                        <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/editing_still.mp4" />
                        {/* EDITOR REEL */}
                        {playEditor && (
                            <video className="absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop playsInline src="/editing_reel.mp4" />
                        )}
                    </div>
                </div>
            </div>
    
        </div>
        <MovementModal open={movementOpen} toggle={toggleMovement} />
        </div>
    )
}