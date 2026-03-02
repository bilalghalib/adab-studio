import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adab Studio",
  description:
    "Right time. Right place. Right thing. Adab Studio builds technology that pays attention — software shaped by who's present, what's at stake, and what the moment asks.",
  openGraph: {
    title: "Adab Studio",
    description:
      "Technology that pays attention. Software shaped by context, not convenience.",
    type: "website",
    url: "https://adab.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
