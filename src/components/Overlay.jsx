// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";
import { cn } from "../utils/helper";

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Overlay = ({ className, children }) => {
  return (
    <m.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={cn(
        `fixed top-0 left-0 z-[20] bg-blackOverlay w-screen h-screen `,
        className
      )}
    >
      {children}
    </m.div>
  );
};

export default Overlay;
