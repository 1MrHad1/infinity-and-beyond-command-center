"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    try {
      setTheme(localStorage.getItem("iab-theme") || "");
    } catch {}
  }, []);

  function toggle() {
    const cur =
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("iab-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button className="btn" onClick={toggle} type="button" aria-label="Toggle theme">
      ◐ {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
