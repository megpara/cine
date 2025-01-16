import { throttle } from "lodash";
import { useEffect, useState } from "react";

export default function WatchCursor() {
    const [position, setPosition] = useState(null);
    
    useEffect(() => {
      const handleMouseMove = throttle((e) => {
          setPosition({ x: e.clientX, y: e.clientY });
      }, 16);
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (!position) return null;

    return (
        <div className="cursor" style={{ left: position.x, top: position.y }} aria-label="Watch">
            Watch
        </div>
    )
}