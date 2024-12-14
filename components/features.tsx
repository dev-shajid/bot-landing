import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import { features } from "@/constants";
import Icons from "./global/icons";
import FeatureCard from "./FeatureHighlights";

const Features = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
      <div className="hidden md:block absolute top-1/2 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10" />

      <Container>
        <div className="max-w-md mx-auto text-center">
          <SectionBadge title="Features" />

          <h2 className="text-3xl lg:text-4xl 2xl:text-4xl mt-6 font-semibold">
            Discover our powerful features
          </h2>
          <p className="text-muted-foreground mt-6">
            We offers a range of features for seamless customer engagement
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex items-center justify-center mx-auto mt-8">
          <Icons.feature className="w-auto h-80" />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Features;


