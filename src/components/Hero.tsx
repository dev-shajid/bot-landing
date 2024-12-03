import React from "react";
import { JoinCommunityOptions } from "./JoinCommunityOptions";

const Hero = () => {
  return (
    <section className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-6 text-center'>
          <h1 className='text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white'>
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
          </h1>

          <p className='mx-auto max-w-[700px] text-gray-400 text-sm md:text-lg font-light'>
            Picture this: AI that handles your emails, schedules your meetings, and simplifies your workflows
            effortlessly. This isn&apos;t a dream — it&apos;s your business&apos;s new reality. Be the pioneer of this
            transformation.
          </p>

          <div className='space-x-8'>
            <div className='relative inline-flex group mt-12'>
              <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#d946ef] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <JoinCommunityOptions>
                <a
                  className='relative inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                  role='button'
                >
                  Join The Community
                </a>
              </JoinCommunityOptions>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
