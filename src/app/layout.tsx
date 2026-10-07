import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/contexts/theme-context";
import appSettings from "@/constants/settings.constants";

const inter = Inter({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: appSettings.name,
    description: appSettings.description,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${appSettings.links.website}/#website`,
            name: appSettings.name,
            url: appSettings.links.website,
        },
        {
            "@type": "Organization",
            "@id": `${appSettings.links.website}/#organization`,
            name: appSettings.name,
            url: appSettings.links.website,
            sameAs: [appSettings.links.github, appSettings.links.linkedin],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.className}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </head>

            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
