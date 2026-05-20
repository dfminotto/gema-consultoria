import { ReactNode } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Purpose from '@/components/Purpose';
import About from '@/components/About';
import Team from '@/components/Team';
import Audience from '@/components/Audience';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-gema-white">
      <Header />
      <main>
        <Hero />
        <Purpose />
        <About />
        <Team />
        <Audience />
        <Services />
        <Differentials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
