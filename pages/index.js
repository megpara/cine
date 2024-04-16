import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [playCreator, setPlayCreator] = useState(false);
    const [playDirector, setPlayDirector] = useState(false);
    const [playCine, setPlayCine] = useState(false);
    const [playEditor, setPlayEditor] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
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
            
            {/* CREATOR */}
            <div className="panel w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-gray-500 text-white w-[33vw] h-screen flex flex-col items-center justify-center font-display">Creator Title</div>
                    <div className="w-[100vw] h-screen text-white reel flex flex-col items-center justify-center font-display">Creator Reel</div>
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