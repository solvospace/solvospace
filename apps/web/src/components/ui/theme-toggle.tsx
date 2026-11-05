"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const iconSize = 18;

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="cursor-pointer border-gray-200 text-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun
                    size={iconSize}
                    className="text-[var(--foreground)]"
                />
            ) : (
                <Moon
                    size={iconSize}
                    className="text-[var(--foreground)]"
                />
            )}
        </button>
    );
}
