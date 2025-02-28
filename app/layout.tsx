import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Load the ABCDiatype font (Regular and Bold only)
const abcdDiatype = localFont({
  src: [
    { path: "./fonts/ABCDiatype-Regular.otf", weight: "400" },
    { path: "./fonts/ABCDiatype-Bold.otf", weight: "700" },
  ],
  variable: "--font-abcd-diatype",
});

// Load the Reckless font (Regular and Medium only)
const reckless = localFont({
  src: [
    { path: "./fonts/RecklessTRIAL-Regular.woff2", weight: "400" },
    { path: "./fonts/RecklessTRIAL-Medium.woff2", weight: "500" },
  ],
  variable: "--font-reckless",
});

export const metadata: Metadata = {
  title: "TulsaAnswers | Tulsa’s Smartest Search Engine – Find Answers Instantly!",
  description: "TulsaAnswers.com is your go-to platform for instant, real-time answers powered by advanced web search technology. Whether you're looking for local insights, business information, or quick solutions, our AI-driven search delivers the most accurate and up-to-date results—faster than ever.",
  openGraph: {
    title: "TulsaAnswers | Tulsa’s Smartest Search Engine – Find Answers Instantly!",
    description: "TulsaAnswers.com is your go-to platform for instant, real-time answers powered by advanced web search technology. Whether you're looking for local insights, business information, or quick solutions, our AI-driven search delivers the most accurate and up-to-date results—faster than ever.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://demo.exa.ai/answer/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "TulsaAnswers – Real Answers, Right Now."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TulsaAnswers | Tulsa’s Smartest Search Engine – Find Answers Instantly!",
    description: "TulsaAnswers.com is your go-to platform for instant, real-time answers powered by advanced web search technology. Whether you're looking for local insights, business information, or quick solutions, our AI-driven search delivers the most accurate and up-to-date results—faster than ever.",
    images: ["https://demo.exa.ai/answer/opengraph-image.jpg"]
  },
  metadataBase: new URL("https://tulsaanswers.com"),
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${abcdDiatype.variable} ${reckless.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
