import { MouseEventHandler, useState } from "react";
import { Button } from "../../ui";
import { Theme, getMode, useThemeContext } from "./ThemeContext";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  //Setting the state in this component prevents re-rendering the entire application

  const [theme, setTheme] = useState<Theme | null>(getMode());

  const handleClick: MouseEventHandler<SVGSVGElement> = () => {
    context.toggle();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const icon =
    theme === Theme.DARK ? (
      <div className="flex justify-end">
        <SunIcon
          className="h-5 w-5 text-green-400 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    ) : (
      <div className="flex justify-end">
        <MoonIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    );

  return <div className="mb-4">{icon}</div>;
};
