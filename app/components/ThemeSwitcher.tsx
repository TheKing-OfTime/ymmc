"use client";

import { useState } from "react";

interface ThemeSwitcherProps {
  onThemeChange: (isDark: boolean) => void;
}

export function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const [isDark, setIsDark] = useState(true);

  const handleChange = (value: boolean) => {
    setIsDark(value);
    onThemeChange(value);
  };

  return (
    <div className="flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => handleChange(true)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          isDark
            ? "bg-white/90 text-gray-900 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        }`}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => handleChange(false)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          !isDark
            ? "bg-white/90 text-gray-900 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        }`}
      >
        🌞 Light
      </button>
    </div>
  );
}
