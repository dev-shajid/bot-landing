import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "./ui/animated-shiny-text";
import { ChevronRight } from "lucide-react";
import AnimateComponent from "./animation/AnimateComponent";
import DotPattern from "./ui/dot-pattern";

const Hero = () => {
  return (
    <section className='w-full py-12 md:py-24 relative'>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />

      <div className='container mx-auto w-full px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-6 text-center relative'>
          <AnimateComponent
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-500'
          >
            {
              <span className='bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-transparent bg-clip-text'>
                Transforming{" "}
              </span>
            }
            Business Operations with Smarter
            <br />
            <span className='bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-transparent bg-clip-text'>
              AI Agents
            </span>
          </AnimateComponent>

          <AnimateComponent delay={.35} className='mx-auto max-w-[700px] text-gray-400 text-sm md:text-lg font-light'>
            Picture this: AI that handles your emails, schedules your meetings, and simplifies your workflows
            effortlessly. This isn&apos;t a dream — it&apos;s your business&apos;s new reality. Be the pioneer of this
            transformation.
          </AnimateComponent>

          <AnimateComponent delay={.7} className="z-10 !mt-12">
            <AnimatedGradientText>
              ✨
              <span
                className={cn(
                  `inline animate-gradient ml-2 bg-gradient-to-r from-[#793bf6] via-[#c24141] to-[#6546ef] bg-[length:var(--bg-size)_100%] text-lg bg-clip-text text-transparent`,
                )}
              >
                Join The Community
              </span>
              <ChevronRight className="ml-1 text-white size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </AnimateComponent>


        </div>
      </div>
    </section>
  );
};

export default Hero;