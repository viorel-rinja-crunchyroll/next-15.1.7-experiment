import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "../app/globals.css"; // Reusing the existing CSS file
import RenderNotifier from "@/components/RenderNotifier";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  console.log('Layout component computed', pageProps);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
        <RenderNotifier />
      </div>
    </>
  );
}