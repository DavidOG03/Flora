import React from "react";
import ContactInfo from "../components/Contact-Components/ContactInfo";
import ContactForm from "../components/Contact-Components/ContactForm";
import Hero from "../components/Contact-Components/Hero";
import Map from "../components/Contact-Components/Map";

const Contact: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN: Contact Info */}
        <ContactInfo />

        {/* RIGHT COLUMN: Form */}
        <ContactForm />
      </main>
      <Map />
    </>
  );
};

export default Contact;
