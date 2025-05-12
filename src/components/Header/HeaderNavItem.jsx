import { NavLink } from "react-router-dom";
import { cn } from "../../utils/helper";
import { textColor } from "../../style";

const HeaderNavItem = ({ link, showBg, isNotFoundPage }) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(
            "nav-link",
            isActive
              ? ` active ${showBg ? textColor : `text-black dark:text-white`}`
              : ` ${
                  isNotFoundPage || showBg
                    ? "text-black dark:text-gray-300 dark:hover:text-black hover:text-black"
                    : "text-black dark:text-white hover:text-black"
                }`
          );
        }}
        end
      >
        {link.title}
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
