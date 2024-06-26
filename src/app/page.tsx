"use client";

import React from "react";
import Image from "next/image";
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
import Footer from "@/components/Footer";
import CertifiedFrom from "@/components/CertifiedFrom";

export default function Home() {
  return (
    <main className="">
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
    </main>
  );
}
