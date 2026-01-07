import { useEffect, useState } from "react";

export default function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const updateKey = (e) => {
      if (e.type === "keydown" && e.key.toLowerCase() === key.toLowerCase()) {
        setIsPressed(true);
      } else if (
        e.type === "keyup" &&
        e.key.toLowerCase() === key.toLowerCase()
      ) {
        setIsPressed(false);
      }
    };
    window.addEventListener("keydown", updateKey);
    window.addEventListener("keyup", updateKey);

    return () => {
      window.removeEventListener("keydown", updateKey);
      window.removeEventListener("keyup", updateKey);
    };
  }, []);

  return isPressed;
}
