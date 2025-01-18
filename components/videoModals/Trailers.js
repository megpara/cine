import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import CloseCursor from "../CloseCursor";

export default function Trailers({ open, toggle }) {
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

            <div className="content flex flex-col items-center justify-center z-60 w-screen h-screen">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
                    className="w-3/4 md:w-1/2">
                    <div className="relative w-full pt-[56.25%] pb-12 px-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <iframe
                            src="https://www.youtube.com/embed/I0JKALT6Ry4?si=Aa1kyHY6f8vSvuc_"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="DAM"
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    </div>
                    <div className="text-sm font-display uppercase leading-8 text-center pt-12">
                        <div className="text-lg">Destination NBA</div>
                        Production Company: Religion of Sports <br />
                        Directors: Liam Hughes & Bryant Robinson <br />
                        Trailer Editor: Colin Lupe
                    </div>
                </motion.div>
            </div>

            {closeCursorOpen && <CloseCursor />}

        </div>
        )}
        </AnimatePresence>
    )
}
