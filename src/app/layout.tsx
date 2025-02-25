import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furry Tech Test",
  description: "Submission by Diana R",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-geist-sans)]">
        <main className="main-container p-8 md:p-28">{children}</main>
        <footer className="footer">Test by Diana R</footer>
      </body>
    </html>
  );
}
