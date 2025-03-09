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
              ? ` active ${showBg ? textColor : `text-secColor`}`
              : ` ${
                  isNotFoundPage || showBg
                    ? "text-[#444] dark:text-gray-300 dark:hover:text-secColor hover:text-black"
                    : "text-gray-300 hover:text-secColor"
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
