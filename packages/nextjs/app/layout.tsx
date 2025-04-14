import localFont from "next/font/local";
import Script from "next/script";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const ppWriter = localFont({
  src: [
    {
      path: "../public/fonts/PPWriter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPWriter-Book.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-ppwriter",
});

export const metadata = getMetadata({
  title: "Ethereum on Tour",
  description: "Bringing Ethereum curriculum, tools, and mentorship to you!",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en" className={`${satoshi.variable} ${ppWriter.variable}`}>
      <head>
        <Script defer data-domain="tour.buidlguidl.com" src="https://plausible.io/js/script.js" />
      </head>
      <body className="font-satoshi">
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
