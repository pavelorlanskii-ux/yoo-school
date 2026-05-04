import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
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
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-[#0A0A0F]">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
