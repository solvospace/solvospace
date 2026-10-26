import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/contexts/theme-context";
import appConfig from "@/configs/app.config";

const inter = Inter({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: appConfig.name,
    description: appConfig.description,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${appConfig.links.website}/#website`,
            name: appConfig.name,
            url: appConfig.links.website,
        },
        {
            "@type": "Organization",
            "@id": `${appConfig.links.website}/#organization`,
            name: appConfig.name,
            url: appConfig.links.website,
            sameAs: [appConfig.links.github, appConfig.links.linkedin],
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
