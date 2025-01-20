import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import CloseCursor from "../CloseCursor";
import Image from "next/image";

export default function Shorts({ open, toggle }) {
    const [closeCursorOpen, setCloseCursorOpen] = useState(true);

    useEffect(() => {
        console.log("CloseCursor state:", closeCursorOpen);
    }, [closeCursorOpen]);

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
                    <div className="relative w-full pt-[56.25%] pb-12 px-12">
                        <Image src="/milquetoast.png" fill alt="Milquetoast" className="object-cover" />
                    </div>
                    <div className="text-sm font-display uppercase leading-8 text-center pt-6 pb-12">
                        <div className="text-lg">Milquetoast - Coming Soon</div>
                        Director: Eliza Huberth <br />
                        Director of Photography: Colin Lupe <br />
                        Editor: Colin Lupe
                    </div>
                    <div className="relative w-full pt-[56.25%] pb-6 px-12">
                        <Image src="/following.png" fill alt="Milquetoast" className="object-cover" />
                    </div>
                    <div className="text-sm font-display uppercase leading-8 text-center pt-6 pb-12">
                        <div className="text-lg">Following - Coming Soon</div>
                        Production Company: Foxy Muskrat <br />
                        Director: Briana Pozner <br />
                        Director of Photography: Colin Lupe <br />
                        Editor: Colin Lupe
                    </div>
                </motion.div>
            </div>

            {closeCursorOpen && <CloseCursor />}

        </div>
        )}
        </AnimatePresence>
    )
}
