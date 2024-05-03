import { AnimatePresence, motion } from "framer-motion";
import HeaderBlack from "./HeaderBlack";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import Footer from "./Footer";

export default function AboutModal({ open, toggle }) {
    useEffect(() => {
        gsap.from(".content", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    })
    return (
        <AnimatePresence>
        {open && (
        <div className="fixed top-0 right-0 w-full h-full text-white z-50">
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

            <HeaderBlack toggle={toggle} />

            <div className="content flex flex-col items-center justify-center z-60 w-screen h-screen">
                <div className="relative">
                    <Image src="/about.jpg" width={500} height={500} sizes="500px" className="rounded-lg" alt="Photo of Colin Lupe"/>
                    <div className="absolute top-0 left-0">
                        <button className="bg-white rounded-ee-lg text-black p-4 font-display text-sm uppercase">Hey, I&apos;m Colin</button>
                    </div>
                </div>
                <div className="text-sm text-black font-display w-[500px] text-justify uppercase leading-8 pt-12">Colin Lupe is a creator, director, DP, cinematographer, and editor based in Los Angeles. Colin is best known for his work on Thank You, Goodnight: The Bon Jovi Story (2024), BS High (2023), and Two Distant Strangers (2020). He is honored to have received Emmy and Oscar awards for his work on Olympic campaign #StrongerTogether and Two Distant Strangers, respectively. Colin has worked with brands and artists such as Bon Jovi, Lizzo, Nike, Olipop, Meta, Naked Cashmere, and others. Specializing in many aspects of the film industry, Colin is thrilled to get to work on a vast range of projects.</div>
            </div>

            <div className="!text-black">
            <Footer/>
            </div>

        </div>
        )}
        </AnimatePresence>
    )
}