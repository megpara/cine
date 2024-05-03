export default function Button({ children }) {
    return (
        <div className="absolute w-screen h-[60px] bottom-0 z-30 flex flex-col items-center justify-center">
        <div className="py-2 px-4 bg-[#2700f9] font-display text-sm tracking-wide rounded-full">
            {children}
        </div>
        </div>
    )
}