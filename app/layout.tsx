import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Product Design | Zdenek Veverka",
    authors: [{ name: "Daniel Pátek" }],
    description: "Zdenek Veverka - Product and graphics design",
    keywords: ["product design", "graphics design", "design", "Zdenek Veverka"],
    robots: "index, follow",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html style={{ scrollBehavior: "smooth" }} data-theme="light" lang={locale}>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
            </head>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
