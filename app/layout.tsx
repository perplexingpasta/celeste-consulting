// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import { CombinedProvider } from "./provider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Céleste Consulting | Helping Dermatologists with Patient Acquisition",
  description:
    "We help dermatologists with consistent, predictable & loyal patient acquisition. We get dermatologists more patients and help them grow their practice online by running paid ads on facebook and google and professional website development using nextjs. We also help set up their google business profile and increase google reviews on google maps of their clinic.",
  other: {
    "twitter:image": "/images/ogmeta.png",
    "twitter:card": "céleste consulting",
    "og:url": "https://www.celesteconsulting.in/",
    "og:image": "/images/ogmeta.png",
    "og:type": "website",
  },
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/apple-touch-icon.png"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXWG6KPV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* <GoogleTagManager gtmId="GTM-TXWG6KPV" /> */}
        <CombinedProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <Analytics />
          <SpeedInsights /> */}
        </CombinedProvider>
      </body>
    </html>
  );
}
