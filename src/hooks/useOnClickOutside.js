import { useEffect, useRef } from "react";

export const useOnClickOutside = ({
  action,
  listenCapturing = true,
  enable = true,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        e.stopPropagation();
        action();
      }
    };
    if (enable) {
      document.addEventListener("click", handleClick, listenCapturing);
    } else {
      document.removeEventListener("click", handleClick, listenCapturing);
    }

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [action, listenCapturing, enable]);

  return { ref };
};
