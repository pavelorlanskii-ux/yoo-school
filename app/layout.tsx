import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "YOO SCHOOL | Яркий английский для школы, поступления и жизни",
  description:
    "Современный образовательный бренд по изучению английского языка для детей, подростков и взрослых. Индивидуальный подход, понятный маршрут, комфортный темп.",
  keywords: ["английский язык", "репетитор английского", "подготовка к ЕГЭ", "подготовка к ОГЭ", "английский для детей", "английский для взрослых"],
  authors: [{ name: "YOO SCHOOL" }],
  openGraph: {
    title: "YOO SCHOOL | Яркий английский для школы, поступления и жизни",
    description: "Современный образовательный бренд по изучению английского языка для детей, подростков и взрослых.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F3EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-[#F6F3EA]">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
