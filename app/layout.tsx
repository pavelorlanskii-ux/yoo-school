import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOO SCHOOL | Английский под вашу цель",
  description:
    "Современный образовательный бренд. Английский для детей, подростков, взрослых и команд. Индивидуальный маршрут, команда преподавателей, диагностика на старте.",
  keywords: ["английский язык", "репетитор английского", "подготовка к ЕГЭ", "подготовка к ОГЭ", "английский для детей", "английский для взрослых", "корпоративное обучение"],
  authors: [{ name: "YOO SCHOOL" }],
  openGraph: {
    title: "YOO SCHOOL | Английский под вашу цель",
    description: "Современный образовательный бренд. Английский для детей, подростков, взрослых и команд.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#a5d8ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-[#a5d8ff]">
      <body className={`${manrope.variable} font-sans antialiased text-[#0a1e3d]`}>{children}</body>
    </html>
  );
}
