import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infinity & Beyond — Command Center",
  description: "60-day build roadmap & task tracker for the Infinity & Beyond team.",
};

const themeInit = `(function(){try{var t=localStorage.getItem('iab-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
