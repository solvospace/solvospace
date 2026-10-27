"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
    useEffect(() => {
        if (process.env.NODE_ENV !== "production") return;

        const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

        if (projectId) {
            Clarity.init(projectId);
        } else {
            console.warn("Microsoft Clarity Project ID is missing.");
        }
    }, []);

    return null;
}
