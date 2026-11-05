"use client";

import appConfig from "@/configs/app.config";
import Link from "next/link";
import { useState, useEffect } from "react";
import socialLinks from "@/configs/social-links";

const iconSize = 18;

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex p-[12px] w-full flex-wrap items-center justify-center gap-4 border-t border-[var(--border-color)] px-5 text-sm text-foreground sm:justify-between">
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

            <div className="flex gap-3 items-center">
                <div className="border-1 rounded-[var(--border-radius)] p-[2px_8px] text-sm">
                    <a href={`mailto:${appConfig.mailId}`}>{appConfig.mailId}</a>
                </div>

                <div className="border-r-1 h-[20px]"></div>

                {socialLinks.map(({ label, href, title, icon: Icon }) => (
                    <Link
                        key={label}
                        aria-label={label}
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={title}
                    >
                        <Icon size={iconSize} />
                    </Link>
                ))}
            </div>
        </footer>
    );
}
