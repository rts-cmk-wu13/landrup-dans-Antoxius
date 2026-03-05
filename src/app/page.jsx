import Image from "next/image";
import Hero from "./components/Hero";
import Holdtyper from "./components/Holdtyper";
import Newsletter from "./components/Newsletter";
import OmOs from "./components/OmOs";
import ContactForm from "./components/ContactForm/ContactForm";
import FooterContact from "./components/FooterContact";

export default function Home() {
  return (
    <div>
      <main className="bg-color">
        <Hero />
        <Holdtyper />
        <Newsletter />
        <OmOs />
        <ContactForm />
        <FooterContact />
      </main>
    </div>
  );
}
