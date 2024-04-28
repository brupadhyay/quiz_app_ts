import React, { ReactNode, createContext, useContext, useState } from "react";

type Theme = "light" | "dark"; // string literal types
// * means theme can have only one of the either two

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// * useTheme is a custom hook - uses react hook to return something
// * pure JS Function which uses react hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    { children }
    </ThemeContext.Provider>
  )
};
