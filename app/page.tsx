import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import DirectionCards from "@/components/DirectionCards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningPath from "@/components/LearningPath";
import MoreThanLessons from "@/components/MoreThanLessons";
import Pricing from "@/components/Pricing";
import TeacherBlock from "@/components/TeacherBlock";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#F6F3EA] text-[#0E1017]">
      <Header />
      <Hero />
      <DirectionCards />
      <LearningPath />
      <MoreThanLessons />
      <Benefits />
      <TeacherBlock />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
