"use client";
import Contact from "@/components/Contact";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import ReadyToTransform from "@/components/readyToTransform";
import Testimonials from "@/components/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-0 pb-8">
      <Hero />
      <Features />
      <ReadyToTransform />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default HomePage;
