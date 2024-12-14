import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import NodeVisualizationCard from "./NodeVisualization";
import N8nWorkflowChat from "./ChatVisualization";

const HowItWorks = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">

      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
      <div className="hidden md:block absolute top-1/2 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10" />
      {/** HEADER AREA */}
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <SectionBadge title="How it works" />

          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Who is this community for?
          </h2>
          <p className="text-muted-foreground mt-6">
            Our community is your gateway to the future of AI. Whether you&apos;re a founder, operator, or engineer, join us to explore real-world applications of AI agents and transform ideas into action.
          </p>
        </div>
      </Container>

      <Container
        className={`w-full py-12 md:py-24 transition-all duration-1000 47uj8i ease-out`}
      >
        {/* <h2 className="text-3xl lg:text-4xl text-center font-semibold my-6">
          Exclusive Member Benefits
        </h2> */}
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid gap-12 lg:grid-cols-3 items-center'>
            <div className='lg:col-span-2'>
              <NodeVisualizationCard />
            </div>
            <div className='lg:col-span-1'>
              <h2 className='text-xl font-bold tracking-tighter md:text-2xl text-white mb-4'>AI Agent Marketplace</h2>
              <p className='text-gray-400 mb-6 font-light'>
                Explore pre-built AI agents and receive weekly updates designed to simplify operations and enhance efficiency. Powered by state-of-the-art tools like n8n, Zapier, Make, and databases such as Supabase and Pinecone, we bring innovation to your fingertips.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container
        className={`w-full py-12  transition-all duration-1000 ease-out`}
      >
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid gap-12 lg:grid-cols-3 items-center'>
            <div className='lg:col-span-1'>
              <h2 className='text-xl font-bold tracking-tighter md:text-2xl text-white mb-4'>
                Thriving Community & Network
              </h2>
              <p className='text-gray-400 mb-6 font-light'>
                Join a dynamic community of founders, operators, and engineers exchanging ideas, overcoming challenges, and staying at the forefront of AI. Access valuable insights, work on innovative projects, and create solutions that deliver meaningful results.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <N8nWorkflowChat />
            </div>
          </div>
        </div>
      </Container>

    </Wrapper>
  );
};

export default HowItWorks;
