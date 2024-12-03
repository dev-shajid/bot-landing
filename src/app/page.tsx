"use client";
import Link from "next/link";
import NodeVisualizationCard from "@/components/NodeVisualization";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import N8nWorkflowChat from "@/components/ChatVisualization";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Contact from "@/components/Contact";
import FeatureHighlights from "@/components/FeatureHighlights";

export default function Home() {
  const [servicesRef, shouldAnimateServices] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [communityRef, shouldAnimateCommunity] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [agentShopRef, shouldAnimateAgentShop] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [memberCommunityRef, shouldAnimateMemberCommunity] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialRef, shouldAnimateTestimonial] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className='min-h-screen relative flex flex-col items-center justify-center bg-[#0a0a1f] bg-gradient-to-tr via-[#0a0a1f] to-black from-[#1a1a3f]'>

      <Header />

      <div className='fixed left-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-indigo-600 blur-3xl filter block opacity-30 lg:top-32 lg:-right-30 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
      <div className='fixed left-[10%] top-50% h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l bg-purple-500 to-indigo-500 blur-3xl filter block opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>

      <main className='flex-1 w-full max-w-5xl relative'>

        <Hero />

        <section
          ref={servicesRef as React.RefObject<HTMLElement>}
          className={`transition-all duration-1000 ease-out ${shouldAnimateServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <FeatureHighlights />
        </section>
        <section className='w-full py-12 md:py-24 text-center'>
          <div className='container mx-auto px-4 md:px-6'>
            <h2 className='text-lg font-bold tracking-tighter sm:text-xl md:text-2xl text-white mb-2'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-8'>
              Your business deserves better. AttenSys delivers smarter, faster, AI-powered solutions to help you thrive.
            </p>
            <Link
              href='/preview-automation'
              className='inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200'
            >
              Start Today – Your AI Revolution Awaits!
            </Link>
          </div>
        </section>

        <section
          ref={communityRef as React.RefObject<HTMLElement>}
          className={`w-full py-12 md:py-24 bg-[#0f0f2f]/30 transition-all duration-1000 ease-out ${shouldAnimateCommunity ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className='container mx-auto px-4 md:px-6'>
            <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white mb-4'>
              Who is this community for?
            </h2>
            <p className='text-gray-400 text-lg max-w-3xl'>
              Our community is your gateway to the future of AI. Whether you&apos;re a founder, operator, or engineer,
              join us to explore real-world applications of AI agents and transform ideas into action.
            </p>
          </div>
        </section>

        <section
          ref={agentShopRef as React.RefObject<HTMLElement>}
          className={`w-full py-12 md:py-24 transition-all duration-1000 47uj8i ease-out ${shouldAnimateAgentShop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className='px-4 md:px-6 mb-12 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white'>
            Members get access to
          </h2>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid gap-12 lg:grid-cols-3 items-center'>
              <div className='lg:col-span-2'>
                <NodeVisualizationCard />
              </div>
              <div className='lg:col-span-1'>
                <h2 className='text-xl font-bold tracking-tighter md:text-2xl text-white mb-4'>AI Agent shop</h2>
                <p className='text-gray-400 mb-6 font-light'>
                  Access pre-built AI agents and weekly updates that simplify operations and boost efficiency. We bring
                  innovation to your fingertips, powered by cutting-edge tools like n8n, Zapier, Make and databases like
                  Supabase, Pinecone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={memberCommunityRef as React.RefObject<HTMLElement>}
          className={`w-full py-12  transition-all duration-1000 ease-out ${shouldAnimateMemberCommunity ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid gap-12 lg:grid-cols-3 items-center'>
              <div className='lg:col-span-1'>
                <h2 className='text-xl font-bold tracking-tighter md:text-2xl text-white mb-4'>
                  Member community & network
                </h2>
                <p className='text-gray-400 mb-6 font-light'>
                  Join our vibrant community of founders, operators, and engineers, collaborating to share ideas, solve
                  challenges, and exchange AI strategies to stay ahead.
                </p>
                <p className='text-gray-400 font-light'>
                  Connect with a world-class network of AI pioneers and gain the insights and support needed to
                  implement AI agents that deliver real results.
                </p>
              </div>
              <div className='lg:col-span-2'>
                <N8nWorkflowChat />
              </div>
            </div>
          </div>
        </section>
        <section
          ref={testimonialRef as React.RefObject<HTMLElement>}
          className={`w-full mt-12 py-12 md:py-24 transition-all duration-1000 ease-out ${shouldAnimateTestimonial ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='flex items-center justify-center mb-6'>
                <Avatar className='size-12'>
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt='Sarah Johnson' />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
              <blockquote className='text-xl text-gray-300 italic mb-4'>
                &ldquo;The AI agents from Attensys have transformed how we handle customer support. We&apos;ve reduced
                response times by 70% while maintaining high customer satisfaction.&rdquo;
              </blockquote>
              <div className='text-white font-medium'>Sarah Johnson</div>
              <div className='text-gray-400 text-sm'>CTO at TechFlow Solutions</div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className='w-full max-w-5xl flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6 border-t border-gray-800'>
        <p className='text-xs text-gray-500'>© 2024 Attensys. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4 text-gray-500' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4 text-gray-500' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
