import { AnimatePresence, motion } from "framer-motion";
import HeaderBlack from "../HeaderBlack";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Footer from "../Footer";
import CloseCursor from "../CloseCursor";

export default function MovementModal({ open, toggle }) {
    const [closeCursorOpen, setCloseCursorOpen] = useState(true);

    useEffect(() => {
        console.log("CloseCursor state:", closeCursorOpen);
    }, [closeCursorOpen]);

    const handleMouseEnter = () => setCloseCursorOpen(false);
    const handleMouseLeave = () => setCloseCursorOpen(true);

    useEffect(() => {
        if (open) {
            gsap.from(".content", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        }
    }, [open])

    return (
        <AnimatePresence>
        {open && (
        <div className="fixed top-0 right-0 w-full h-full text-white z-50 cursor-none" onClick={() => toggle()}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "100%",
              transition: { duration: 0.5 },
            }}
            exit={{
              width: "0%",
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className="fixed top-0 right-0 h-screen bg-white"
            id="menu-container"
          >
            </motion.div>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-auto">
                <HeaderBlack toggle={toggle} />
            </div>

            <div className="content flex flex-col items-center justify-center z-60 w-screen h-screen">
                <div className="w-3/4 cursor-default" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="relative w-full pt-[56.25%]">
                        <iframe
                            src="https://player.vimeo.com/video/913127909?h=fa45fe90a1&badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="DAM"
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    </div>
                    <div className="text-sm text-black font-display uppercase leading-8 pt-12 text-center"><div className="text-lg">DAM</div><div className="text-[#2700f9]">Director, DP, Editor: Colin Lupe</div>Dancer: Megan Paradowski</div>
                </div>
            </div>

            <div className="!text-black cursor-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Footer/>
            </div>

            {closeCursorOpen && <CloseCursor />}

        </div>
        )}
        </AnimatePresence>
    )
}
