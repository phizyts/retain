import { Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Retain",
  description: "An AI powered note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontInter.variable} font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
