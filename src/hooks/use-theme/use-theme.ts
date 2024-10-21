import { useContext } from "react";
import { ThemeContext } from "../../context";

/**
 * Hook to access the current theme state and toggleTheme function.
 *
 * Should be used within a ThemeProvider component.
 *
 * @returns {ThemeContextType} An object containing the theme state and toggleTheme function.
 *
 * @example
 * import { useTheme } from "./use-theme";
 *
 * const MyComponent = () => {
 *   const { theme, toggleTheme } = useTheme();
 *
 *   return (
 *     <div>
 *       <p>Current theme: {theme}</p>
 *       <button onClick={toggleTheme}>Toggle theme</button>
 *     </div>
 *   );
 * };
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
