import { useState, useEffect } from "react";
export default function useCustomPointer(hover) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {hover}
    </div>
  );
}
