import { Switch } from "@nextui-org/react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "../../hooks";
import { Link } from "react-router-dom";

/**
 * A header component that renders a toggle switch for changing the theme.
 *
 * The toggle switch is positioned at the top right of the screen.
 *
 * The component uses the `useTheme` hook to get the current theme and the function to toggle the theme.
 *
 * @returns A JSX element representing the header.
 *
 * @example
 * <Header />
 */
export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full h-[100px] z-20 fixed top-0 left-0 border-b transition-colors duration-300 dark:bg-gray-900 bg-white border-gray-300 dark:border-gray-700">
      <div className="w-full h-full justify-between flex items-center container px-4 md:px-2 xl:px-0">
        <Link to="/">
          <h1 className="text-2xl xl:text-3xl flex gap-x-4 cursor-pointer select-none items-center font-bold">
            Star Wars Characters
          </h1>
        </Link>
        <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          size="lg"
          color="secondary"
          startContent={
            <IoMdSunny className="text-yellow-500 dark:text-yellow-300" />
          }
          endContent={<IoMdMoon className="text-gray-800 dark:text-gray-200" />}
        />
      </div>
    </header>
  );
};
