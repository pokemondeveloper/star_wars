import { createContext } from "react";
import { ThemeContextType } from "../../theme/types";
/**
 * The ThemeContext provides access to the current theme state and the toggleTheme function.
 *
 * It should be used within a ThemeProvider component to ensure that the theme state is properly managed.
 *
 * @typedef {ThemeContextType} ThemeContextType - An object containing the current theme state and a function to toggle the theme.
 *
 * @example
 * import { ThemeContext } from "./theme-context";
 *
 * const { theme, toggleTheme } = useContext(ThemeContext);
 *
 * if (theme === "dark") {
 *   // Apply dark theme styles
 * }
 * toggleTheme(); // Toggles between light and dark themes
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
