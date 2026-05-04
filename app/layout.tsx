import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
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
  themeColor: "#F3F5F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-[#F3F5F6]">
      <body className={`${manrope.variable} font-sans antialiased bg-[#F3F5F6] text-[#050505]`}>{children}</body>
    </html>
  );
}
