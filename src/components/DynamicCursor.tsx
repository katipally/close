import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const DynamicCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "all 0.1s ease-out",
      }}
    />
  );
};

export default DynamicCursor;