import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { FeatureAnimation } from './feature-animation';

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
        className='bg-[#070b1e]/50 border-gray-800 hover:border-[#184295] cursor-pointer transition-all duration-500 ease-out overflow-hidden h-full'
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


export default FeatureCard;
