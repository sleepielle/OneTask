import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Task",
  description: "One Task at a Time ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx("antialiased")}>{children}</body>
    </html>
  );
}
