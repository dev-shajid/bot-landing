import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./global/wrapper";
import Container from "./global/container";

const Hero = () => {
  return (
    <Wrapper className="relative">
      <div className="block absolute top-1/4 left-1 w-72 h-72 bg-indigo-800 opacity-80 rounded-full blur-[10rem] -z-10" />

      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <Container>
        <div className="flex flex-col items-center justify-center py-20 h-full">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
              <Image
                src="/icons/sparkles-dark.svg"
                alt="✨"
                width={24}
                height={24}
                className="w-4 h-4"
              />
              Introducing Chat AI
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>

          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
            <h1 className="text-4xl md:text-5xl lg:text-5xl md:!leading-snug font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-500">
              Transforming Business Operations with Smarter <br />
              <span className='bg-gradient-to-r from-[#5c71f6] to-[#7646ef] text-transparent bg-clip-text'>
                AI Agents
              </span>
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Picture this: AI that handles your emails, schedules your meetings, and simplifies your workflows effortlessly. This isn&apos;t a dream — it&apos;s your business&apos;s new reality. Be the pioneer of this transformation.
            </p>
            <Link
              href="#"
              className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-4 py-1 md:py-2 gap-2 shadow-3xl shadow-background/40 cursor-pointer select-none mt-8"
            >
              <p className="text-foreground text-sm text-center md:text-base font-medium">
                ✨ {"  "}Join the community
              </p>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* <div className="relative flex items-center py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/assets/dashboard.svg"
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
              />
            </div>
          </div> */}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
