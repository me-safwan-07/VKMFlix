import { useEffect } from "react";

export const useOnKeyPress = ({ key, action, enable = true }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === key) action(e);
    };

    if (enable) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [action, key, enable]);
};
