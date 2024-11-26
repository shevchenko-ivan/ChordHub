import type { Metadata } from "next";
import "./output.css";
import {Search} from "@/app/components/search.tsx";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Search/>
        </header>
        {children}
      </body>
    </html>
  );
}
