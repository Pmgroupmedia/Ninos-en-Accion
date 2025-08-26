import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import About from "@/components/sections/about";

import Approach from "@/components/sections/approach";

import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />

        <Approach />

        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
