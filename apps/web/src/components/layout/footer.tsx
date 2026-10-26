"use client";

import appConfig from "@/configs/app.config";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex h-[50px] w-full flex-wrap items-center justify-center gap-4 border-t border-[var(--border-color)] px-5 text-sm text-foreground sm:justify-between">
            <p className="items-center">
                &copy; {currentYear}{" "}
                <Link
                    aria-label={appConfig.name}
                    className="font-semibold"
                    href={appConfig.links.website}
                    title={appConfig.name}
                >
                    {appConfig.name}
                </Link>
                .
            </p>
        </footer>
    );
}
