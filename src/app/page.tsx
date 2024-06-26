"use client";

import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import WorkedWith from "@/components/WorkedWith";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Contact from "@/components/Contact";
import CertifiedFrom from "@/components/CertifiedFrom";
import { IoLogoWhatsapp } from "react-icons/io";
import whatsappLink from "@/data/socialLinks";

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden realtive">
      <Hero />
      <Choose />
      <WorkedWith />
      <AboutMe />
      <Projects />
      <CertifiedFrom />
      <Certificate />
      <Testimonials />
      <Offer />
      <Contact />
      <div className="sticker fixed bottom-1 right-1 bg-[#f4f4f4] rounded-full p-[0.35rem] text-5xl z-[100] text-[#00d25c]">
        <Link href={whatsappLink}>
        <IoLogoWhatsapp />
        </Link>
      </div>
    </main>
  );
}
