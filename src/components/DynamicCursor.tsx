import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const DynamicCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false); // Track cursor visibility

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hide cursor on entering navigation
  useEffect(() => {
    const nav = document.querySelector("nav ul");

    const handleMouseEnter = () => setIsHidden(true);
    const handleMouseLeave = () => setIsHidden(false);

    if (nav) {
      nav.addEventListener("mouseenter", handleMouseEnter);
      nav.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (nav) {
        nav.removeEventListener("mouseenter", handleMouseEnter);
        nav.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    !isHidden && ( // Render cursor only when not hidden
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "white", // Default color
          mixBlendMode: "difference", // Blend mode to invert the color
          pointerEvents: "none", // Ensure it doesn't interfere with pointer events
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    )
  );
};

export default DynamicCursor;
