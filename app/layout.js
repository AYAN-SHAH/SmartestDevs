"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Load Bootstrap once
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";
import Topbar from "./components/topbar";
import NewNavbar from "./components/newNavbar";
import Footer from "./components/footer";
import ProgressProvider from "./components/ProgressProvider";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Initialize Query Client
const queryClient = new QueryClient();

// Configure DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
        {/* Load additional styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/template/WebAssets/css/bootstrap.css" />
        <link rel="stylesheet" href="/template/WebAssets/css/style.css" />
        <link rel="stylesheet" href="/template/WebAssets/css/dark.css" />
        <link rel="stylesheet" href="/template/WebAssets/css/font-icons.css" />
        <link rel="stylesheet" href="/template/WebAssets/css/responsive.css" />
        <link rel="stylesheet" href="/template/assets/css/Menu/style.css" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VHVKZ6Q42R"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VHVKZ6Q42R');
            `,
          }}
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Topbar />
          <NewNavbar />
          <ProgressProvider>{children}</ProgressProvider>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
