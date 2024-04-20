import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

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
    return (
        <div className="container flex w-[532vw] max-w-[532vw] overflow-x-hidden overflow-y-auto">
            {/* STILL IMAGES */}
            <img src="stills/crop.png" className="absolute w-full h-full top-0 left-0 z-20" />
            {showOverhead1 && <img src="stills/overhead1.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showOverhead2 && <img src="stills/overhead2.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showOverhead3 && <img src="stills/overhead3.png" className="absolute top-0 left-0 w-screen h-screen object-cover object-right z-30"/>}
            {showTds1 && <img src="stills/tds1.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showTds2 && <img src="stills/tds2.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showTds3 && <img src="stills/tds3.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {/* {showDj1 && <img src="stills/dj1.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showDj2 && <img src="stills/dj2.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>}
            {showDj3 && <img src="stills/dj3.png" className="absolute top-0 left-0 w-screen h-screen object-cover z-30"/>} */}
            {showWiz1 && <img src="stills/wiz1.png" className="absolute top-0 left-0 w-screen h-screen object-cover object-right z-30"/>}
            {showWiz2 && <img src="stills/wiz2.png" className="absolute top-0 left-0 w-screen h-screen object-cover object-right z-30"/>}
            {showLizzo && <img src="stills/lizzo.png" className="absolute top-0 left-0 w-screen h-screen object-cover object-right z-30"/>}
            {showMonitor && <video autoPlay muted loop src="stills/Monitor-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}
            {showTv && <video autoPlay muted loop src="stills/TV-1-hevc-safari.mp4" className="absolute top-0 left-0 w-screen h-screen object-contain z-30"/>}

            {/* MENUS */}

            {/* CREATOR */}
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-40 p-16" + (playCreator ? " opacity-100" : " opacity-0")}>
                <div className="flex flex-col justify-between">
                    <Link href="">Non Essentials</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="">Settling</Link>
                </div>
            </div>

            {/* DIRECTOR */}
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-40 p-16" + (playDirector ? " opacity-100" : " opacity-0")}>
                <div className="flex flex-col justify-between">
                    <Link href="">Olipop</Link>
                    <Link href="">Nike</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="">Movement</Link>
                </div>
            </div>

            {/* CINEMATOGRAPHER */}
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-40 p-16" + (playCine ? " opacity-100" : " opacity-0")}>
                <div className="flex flex-col justify-between">
                    <Link href="">BS High</Link>
                    <Link href="">Bon Jovi</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="">Milquetoast</Link>
                    <Link href="">Naked Cashmere</Link>
                </div>
            </div>

            {/* EDITOR */}
            <div className={"absolute top-0 left-0 w-screen h-screen flex justify-between text-4xl text-white font-display z-40 p-16" + (playEditor ? " opacity-100" : " opacity-0")}>
                <div className="flex flex-col justify-between">
                    <Link href="">Olympics</Link>
                    <Link href="">Trailers</Link>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link href="">Lizzo</Link>
                    <Link href="">Meta</Link>
                </div>
            </div>
            
            {/* TITLES AND REELS */}

            {/* CREATOR */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-gray-500 text-white w-[33vw] h-screen flex flex-col items-center justify-center font-display">Creator Title</div>
                    <div className="w-[100vw] h-screen relative">
                        <div className="absolute w-full h-full top-0 left-0 text-white reel flex flex-col items-center justify-center font-display">Creator Reel</div>
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
    )
}