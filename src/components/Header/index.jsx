import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import throttle from "lodash.throttle";
import { 
  UserButton, 
  SignedIn, 
  SignedOut,
  SignInButton,
  SignUpButton
} from "@clerk/clerk-react";

import HeaderNavItem from "./HeaderNavItem";
import { useGlobalContext } from '../../context/globalContext';
import { useTheme } from "../../context/themeContext"
import { maxWidth, textColor } from "../../style";
import { THROTTLE_DELAY } from "../../utils/config";
import { cn } from "../../utils/helper";
import { navLinks } from '../../constants';
import Logo from "../SideBar/Logo";
import ThemeMenu from "../ThemeMenu";
import { FaGem } from "react-icons/fa";

const Header = () => {
  const { openMenu, theme, showThemeOptions } = useTheme();
  const { setShowSidebar } = useGlobalContext();

  const [isActive, setIsActive] = useState(false);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleBackgroundChange = () => {
      const body = document.body;
      if (
        window.scrollY > 0 ||
        (body.classList.contains("no-scroll") &&
        parseFloat(body.style.top) * -1 > 0))
      {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const throttledHandleBackgroundChange = throttle(
      handleBackgroundChange,
      THROTTLE_DELAY
    );

    window.addEventListener("scroll", throttledHandleBackgroundChange);

    return () => {
      window.removeEventListener("scroll", throttledHandleBackgroundChange);
    };
  }, []);

  useEffect(() => {
    if (location.pathname.split("/").length > 3) {
      setIsNotFoundPage(true);
    } else {
      setIsNotFoundPage(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={cn(
        `md:py-[16px] py-[14.5px] fixed top-0 left-0 w-full z-10 transition-all duration-50`,
        isActive && (theme === "Dark" ? "header-bg--dark" : "header-bg--light")
      )}
    >
      <nav
        className={cn(maxWidth, `flex justify-between flex-row items-center`)}
      >
        <div className="flex gap-4">
          <button
            type="button"
            name="menu"
            className={cn(
              `inline-block text-[22.75px] md:hidden transition-all duration-300`,
              isNotFoundPage || isActive
              ? `${textColor} dark:hover:text-secColor hover:text-black `
              : ` dark:hover:text-secColor text-secColor`
            )}
            onClick={() => setShowSidebar(true)}
            >
            <AiOutlineMenu />
          </button>

          <Logo
            logoColor={cn(
              isNotFoundPage
              ? "text-black dark:text-primary"
              : !isNotFoundPage && isActive
              ? "text-black dark:text-primary"
              : "text-primary"
            )}
            />
        </div>
        <div className="flex gap-2">

        
        <div className="flex justify-center items-center my-4 ">
          <Link
            to="/subscription"
            // className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-black border border-yellow-500 shadow-lg hover:scale-105 transition-transform duration-300"
            className="relative flex items-center gap-2 px-4 hover:scale-105 transition-transform duration-300"
          >
            {/* Sparkle background */}
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/10 via-yellow-500/5 to-transparent blur-md" /> */}

            {/* Icon */}
            <FaGem className="text-yellow-400 text-lg md:text-xl z-10" />

            {/* Text (hidden on small screens) */}
            <span className="hidden lg:inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-semibold z-10">
              Get premium
            </span>
          </Link>
        </div>

        <div className="md:flex flex-row gap-8 items-center text-gray-600 dark:text-gray-300">
          <ul className="hidden md:flex flex-row gap-8 capitalize text-[14.75px] font-medium">
            {navLinks.map((link) => {
              return (
                <HeaderNavItem
                  key={link.title}
                  link={link}
                  isNotFoundPage={isNotFoundPage}
                  showBg={isActive}
                />
              );
            })}
          </ul>

          <div className="flex items-center gap-4 py-3">
            <div className="hidden md:flex button relative">
              <button
                name="theme-menu"
                type="button"
                onClick={openMenu}
                id="theme"
                className={cn(
                  `flex items-center justify-center mb-[2px] transition-all duration-100 hover:scale-110`,
                  isNotFoundPage || isActive
                    ? ` ${textColor} dark:hover:text-secColor hover:text-black `
                    : ` dark:hover:text-secColor text-gray-300 `
                )}
              >
                {theme === "Dark" ? <BsMoonStarsFill /> : <FiSun />}
              </button>
              <AnimatePresence>
                {showThemeOptions && <ThemeMenu />}
              </AnimatePresence>
            </div>

            {/* Authentication Buttons */}
            <SignedIn>
              <div className="flex items-center gap-2">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-6 w-6",
                      userButtonPopoverCard: "bg-white dark:bg-gray-800",
                    }
                  }}
                />
                {/* <div className="hidden md:block">
                  <p className="text-sm font-medium">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.primaryEmailAddress?.emailAddress}
                  </p>
                </div> */}
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                <SignInButton mode="modal">
                  <button className="px-4 py-1 text-sm xs:text-xs sm:text-sm md:text-base rounded-md bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-1 text-sm xs:text-xs xs:inline-block hidden sm:text-sm md:text-base rounded-md bg-white text-black hover:bg-gray-600 hover:text-white transition-colors border border-gray-300 dark:border-gray-600">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

          </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;