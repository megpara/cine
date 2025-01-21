import { AnimatePresence, motion } from "framer-motion";
import HeaderBlack from "./HeaderBlack";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Footer from "./Footer";
import CloseCursor from "./CloseCursor";

export default function AboutModal({ open, toggle }) {
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
              transition: { duration: 0.2, delay: 0.3 },
            }}
            className="fixed top-0 right-0 h-screen bg-white"
            id="menu-container"
          >
            </motion.div>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-auto">
                <HeaderBlack toggle={toggle} aboutOpen={open} />
            </div>

            <div className="content flex flex-col items-center z-60 w-screen h-screen overflow-scroll">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
                    className="w-3/4 md:w-1/2 lg:w-1/3 h-full flex flex-col items-center justify-center">
                    <div className="relative w-full h-1/3">
                        <Image src="/about.jpg" fill className="rounded-lg object-cover" alt="Photo of Colin Lupe"/>
                        <div className="absolute top-0 left-0">
                            <button className="bg-white rounded-ee-lg text-black p-4 font-display text-sm uppercase">Hey, I&apos;m Colin</button>
                        </div>
                    </div>
                    <div className="text-sm text-black font-display text-justify uppercase leading-8 pt-12">Colin Lupe is a creator, director, DP, cinematographer, and editor based in Los Angeles. Colin is best known for his work on Thank You, Goodnight: The Bon Jovi Story (2024), BS High (2023), and Two Distant Strangers (2020). He is honored to have received Emmy and Oscar awards for his work on Olympic campaign #StrongerTogether and Two Distant Strangers, respectively. Colin has worked with brands and artists such as Bon Jovi, Lizzo, Nike, Olipop, Meta, Naked Cashmere, and others. Specializing in many aspects of the film industry, Colin is thrilled to get to work on a vast range of projects.</div>
                </motion.div>
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