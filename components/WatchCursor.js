import { useEffect, useState } from "react";

export default function WatchCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="cursor" style={{ left: position.x, top: position.y }}>
            Watch
        </div>
    )
}