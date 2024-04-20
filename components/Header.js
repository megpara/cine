import Link from "next/link";

export default function Header() {
    return (
        <div className="z-10 fixed w-screen text-white font-display flex justify-between text-md p-4">
            <Link href="/" className="hover:underline">Colin Lupe</Link>
            <div className="space-x-2">
                <Link href="/about" className="hover:underline">About</Link>
                <a href="https://www.instagram.com/infinitylupee/" target="_blank" className="hover:underline">IG</a>
            </div>
        </div>
    )
}