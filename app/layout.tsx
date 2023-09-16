import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

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
    <html
      // .variable allow us to use variable classNames
      // lora.classname applies the font globally
      className={`${poppins.variable} ${lora.variable} ${lora.className}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
