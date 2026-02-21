import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  //Initialize dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true; // Dark mode saved
    localStorage.setItem("theme", "light"); // Default to light mode
    return false;
  });

  //Keep the HTML <html> class in sync with the state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Run this effect whenever isDarkMode changes

  //Toggle function for the button
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode; // Flip true/false
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Save preference
      return newMode; // Update state
    });
  };

  //Render a button with the appropriate icon
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-1.5 right-5 z-50 p-2 rounded-full transitions-colors duration-300",
        "focus:outline-hidden",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
