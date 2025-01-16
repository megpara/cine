import { useEffect, useState } from "react";
import { throttle } from "lodash";

export default function CloseCursor({ toggle }) {
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
        <div className="cursor" style={{ left: position.x, top: position.y }} onClick={() => toggle()} aria-label="Close modal">
            Close
        </div>
    )
}
