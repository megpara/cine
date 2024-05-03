import Link from "next/link";

export default function Footer() {
    return (
        <div className="fixed bottom-0 w-screen h-[60px] flex items-center justify-between p-4 tracking-wide font-display z-40">
            <a href="mailto:colinlupe@gmail.com" className="hover:text-[#2700f9] flex items-center text-sm transition-colors duration-150">
                <div className="mr-2">Connect</div>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.666992 1.1665C0.39085 1.1665 0.166992 0.942646 0.166992 0.666504C0.166992 0.390362 0.39085 0.166504 0.666992 0.166504H7.33366C7.6098 0.166504 7.83366 0.390362 7.83366 0.666504V7.33317C7.83366 7.60931 7.6098 7.83317 7.33366 7.83317C7.05752 7.83317 6.83366 7.60931 6.83366 7.33317V1.87361L1.02055 7.68672C0.825283 7.88199 0.508701 7.88199 0.313439 7.68672C0.118177 7.49146 0.118177 7.17488 0.313439 6.97962L6.12655 1.1665H0.666992Z" class="fill-current"></path></svg>
            </a>
            <div className="text-[9px]">© 2024 CL</div>
        </div>
    )
}