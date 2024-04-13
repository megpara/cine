import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
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
            <div className="panel w-[133vw] h-screen text-white relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-red-500 w-[33vw] h-screen">Creator title</div>
                    <div className="w-[100vw] h-screen text-white reel">Creator reel</div>
                </div>
            </div>
            <div className="panel bg-white text-black w-[133vw] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-red-500 w-[33vw] h-screen">Director title</div>
                    <div className="w-[100vw] h-screen text-white reel">Director reel</div>
                </div>
            </div>
            <div className="panel w-[133vw] h-screen text-white relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-red-500 w-[33vw] h-screen">Cinematographer title</div>
                    <div className="w-[100vw] h-screen text-white reel">Cinematographer reel</div>
                </div>
            </div>
            <div className="panel w-[133vw] h-screen bg-white text-black relative">
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="bg-red-500 w-[33vw] h-screen">Editor title</div>
                    <div className="w-[100vw] h-screen text-white reel">Editor reel</div>
                </div>
            </div>
        </div>
    )
}