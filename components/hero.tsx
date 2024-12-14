import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import AnimatedSplitText from "./ui/split-character-animation";

const Hero = () => {
  const description = "Picture this: AI that handles your emails, schedules your meetings, and simplifies your workflows effortlessly. This isn't a dream — it's your business's new reality. Be the pioneer of this transformation.";

  return (
    <Wrapper className="relative">
      <div className="block absolute top-12 left- w-72 h-72 bg-indigo-800 opacity-80 rounded-full blur-[10rem] -z-10" />

      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div className="flex flex-col items-center justify-center py-4 h-full">
        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
          <Container delay={0.4}>
            <AnimatedSplitText
              className="text-4xl md:text-5xl lg:text-5xl md:!leading-snug font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-500"
              text={"Transforming Business Operations with Smarter"}
              delay={0.4}
            />
          </Container>
          <Container delay={0.7}>
            <AnimatedSplitText
              className="text-4xl md:text-5xl lg:text-5xl md:!leading-snug font-semibold text-center bg-gradient-to-r from-[#5c71f6] to-[#7646ef] text-transparent bg-clip-text"
              text={"AI Agents"}
              delay={1}
            />
          </Container>
          <Container className="mt-12" delay={1} reverse={false}>
            <AnimatedSplitText text={description} delay={1} />
          </Container>
          <Container delay={1.3} className="flex justify-center mt-12">
            <Link
              href="#"
              className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <p className="z-10 py-0.5 text-lg font-medium text-neutral-100 flex items-center justify-center gap-1.5">
                ✨ Join the community
                <ArrowRight className="w-4 h-4" />
              </p>
            </Link>
          </Container>
        </div>
        <Container delay={1.6} className="w-full bg-gradient-to-b from-transparent to-black opacity-50 -z-10">
          <div className="relative flex items-center py-10 md:py-20 w-full ">
            <video
              className="w-full h-full md:max-h-[85dvh] aspect-[838/471] rounded-xl"
              src="/assets/demo.webm"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </Container>


      </div>
    </Wrapper>
  );
};

export default Hero;