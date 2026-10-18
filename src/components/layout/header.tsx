"use client";

import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { ThemeToggle } from "../ui/theme-toggle";
import appConfig from "@/configs/app.config";

export default function Header() {
    return (
        <nav
            className={`bg-opacity-5 sticky top-0 z-50 mx-auto flex h-[50px] w-full items-center justify-between
                border-b border-[var(--border-color)] backdrop-blur-xl backdrop-filter gap-2 px-5`}
        >
            <div className="flex items-center gap-5 font-semibold">{appConfig.name}</div>

            <div className="flex gap-3 sm:ml-0">
                <Link
                    aria-label="View the repository on GitHub"
                    href={appConfig.links.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="View the repository on GitHub"
                >
                    <LuGithub className="size-5" />
                </Link>

                <ThemeToggle />
            </div>
        </nav>
    );
}
