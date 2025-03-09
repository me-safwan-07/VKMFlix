import { NavLink } from "react-router-dom";
import { cn } from "../../utils/helper";
import { listItem, activeListItem } from "../../style";


const SidebarNavItem = ({ link, closeSideBar }) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(listItem, isActive && activeListItem);
        }}
        onClick={closeSideBar}
      >
        {<link.icon className="text-[18px]" />}
        <span>{link.title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
