import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meghna Yadav | Frontend Engineer",
  description:
    "Portfolio of a frontend engineer skilled in React, TypeScript, and modern web development.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
