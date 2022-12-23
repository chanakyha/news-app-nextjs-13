"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button className="hover:scale-105 duration-200 ease-out active:scale-50 ">
      {currentTheme == "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="w-8 h-8 text-yellow-500"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="w-8 h-8 text-gray-900"
        />
      )}
    </button>
  );
};

export default DarkModeButton;
