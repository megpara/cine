import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import CloseCursor from "../CloseCursor";

export default function NonEssentials({ open, toggle }) {
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
        <div className="fixed top-0 right-0 w-full h-full text-white z-50 cursor-none " onClick={() => toggle()}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "100%",
              transition: { duration: 0.5 },
            }}
            exit={{
              width: "0%",
              transition: { duration: 0.2, delay: 0.3 },
            }}
            className="fixed top-0 right-0 h-screen bg-black opacity-95"
            id="menu-container"
          >
            </motion.div>

            <div className="content flex flex-col items-center justify-center z-60 w-screen h-full overflow-scroll">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
                    className="w-3/4 md:w-1/2 py-24 h-full">
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/f7FnhJ1bygw?si=96rzDt1HcHAhF896"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/5CHWz2CUMws?si=BdIzaCUwr4Ml5Ilx"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/DVE09D0L3v4?si=aWt70ZKbUrb8cYk1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/7Ql1Jq5fjyo?si=RIB9MFHalUBltk8z"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/UayrtLp_Xho?si=UHBO4dAjivYPFT0n"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/E1uL0g0KtH0?si=mWDgdE6aiR7c1anE"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/dVtZ9-Rgx9c?si=0nnKzSVOdhX7j4kR"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/MKBuwL7BUiU?si=pfDDIPUuGyEHBc-b"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/pWRykcc5nCs?si=ic1y4PGSHk0ncY-K"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="relative w-full pt-[56.25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/GXnsP9L2HAE?si=enk6WfSzxnGX67IV"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="The Non-Essentials"
                            className="absolute top-0 left-0 w-full h-full py-6"
                        ></iframe>
                    </div>
                    <div className="text-sm font-display uppercase leading-8 text-center pb-12">
                        <div className="text-lg">The Non-Essentials</div>
                        Created By: Colin Lupe, Justine Lupe, Briana Pozner and Josh Duvendeck
                    </div>
                </motion.div>
            </div>

            {closeCursorOpen && <CloseCursor />}

        </div>
        )}
        </AnimatePresence>
    )
}
