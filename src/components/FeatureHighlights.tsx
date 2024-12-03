import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { FeatureAnimation } from './animation/feature-animation';

const features: Feature[] = [
  {
    title: "Dynamic AI Agents",
    description:
      "Empower your operations with AI agents that learn, adapt, and handle tasks like pros. From customer support to advanced data analysis, let them take the reins.",
    type: "ai-agents",
  },
  {
    title: "Smart Inbox Management",
    description:
      "Don't let your inbox control you. Prioritize, categorize, and auto-respond with AI that turns chaos into clarity.",
    type: "inbox",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create meaningful, tailored experiences for your customers. From recommendations to follow-ups, your AI assistant does it all.",
    type: "customer-journeys",
  },
  {
    title: "Seamless Multi-Channel Chatbots",
    description:
      "Engage customers wherever they are — from websites to social media — with chatbots that sound natural and know your business inside out.",
    type: "chatbots",
  },
  {
    title: "Healthcare Scheduling",
    description:
      "Handle appointment booking, rescheduling, and patient reminders with ease. AI makes healthcare scheduling efficient and error-free.",
    type: "healthcare",
  },
  {
    title: "Smart Data Insights",
    description:
      "Transform raw data into actionable insights with AI-powered analytics. Visualize trends, predict outcomes, and make decisions with confidence.",
    type: "data-insights",
  },
];

interface Feature {
  title: string;
  description: string;
  type: "ai-agents" | "inbox" | "customer-journeys" | "chatbots" | "healthcare" | "data-insights";
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className='bg-[#0f0f2f]/50 border-gray-800 hover:border-[#5355d1] cursor-pointer transition-all duration-500 ease-out overflow-hidden h-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className='p-6'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="h-24 mb-4">
            <FeatureAnimation type={feature.type} isHovered={isHovered} />
          </div>
          <motion.h3
            className='text-lg font-medium text-white mb-2'
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className='text-sm text-gray-400'
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      </Card>
    </motion.div>
  );
};



const FeatureHighlights = () => {
  return (
    <div className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
