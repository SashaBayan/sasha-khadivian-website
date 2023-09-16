import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";

export const metadata: Metadata = {
  title: "Sasha Khadivian",
  description:
    "Sasha Khadivian is a full-stack software engineer with experience in the travel, hospitality and health industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
