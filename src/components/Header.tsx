import React from "react";
import { useTheme } from "../context/ThemeContext";

type HeaderProps = {
  title: string;
  subtitle?: number;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </>
  );
};

export default Header;
