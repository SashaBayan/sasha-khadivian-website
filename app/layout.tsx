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
  title: "Helvetica Lake",
  description:
    "Helvetica Lake is a software consulting firm specializing in innovative solutions for your digital product needs.",
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
