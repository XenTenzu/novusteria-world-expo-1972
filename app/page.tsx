"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { translations } from "../lib/translations";

export default function Page() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const t = translations[lang];

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://a.top4top.io/p_3635s2kaa0.jpg)"
        }}
      >
        <h1 className="text-white text-5xl font-bold">
          {t.heroTitle}
        </h1>
        <p className="text-white mt-4">{t.heroSubtitle}</p>
      </section>

      <Section id="about" title={t.aboutTitle}>
        {t.aboutText}
      </Section>

      <Footer />
    </>
  );
}
