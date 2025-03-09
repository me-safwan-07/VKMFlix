import { ImMobile2 } from "react-icons/im";


import { useGlobalContext } from "../../context/globalContext";
import { useTheme } from "../../context/themeContext";
import { cn } from "../../utils/helper";
import { activeListItem, listItem } from "../../style";


const ThemeOption = ({ theme }) => {
  const { setTheme, theme: currTheme, checkSystemTheme } = useTheme();
  const { setShowSidebar } = useGlobalContext();

  const { title } = theme;

  const changeTheme = () => {
    if (title === "System") {
      checkSystemTheme();
    } else {
      setTheme(title);
    }
    setShowSidebar(false);
  };

  return (
    <li>
      <button
        type="button"
        className={cn(listItem, theme.title === currTheme && activeListItem)}
        onClick={changeTheme}
      >
        {theme.title === "System" ? <ImMobile2 /> : <theme.icon />}
        <span>{theme.title}</span>
      </button>
    </li>
  );
};

export default ThemeOption;
