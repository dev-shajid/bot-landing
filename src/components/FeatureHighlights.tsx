import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Dynamic AI Agents",
    description:
      "Empower your operations with AI agents that learn, adapt, and handle tasks like pros. From customer support to advanced data analysis, let them take the reins.",
  },
  {
    title: "Smart Inbox Management",
    description:
      "Don't let your inbox control you. Prioritize, categorize, and auto-respond with AI that turns chaos into clarity.",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create meaningful, tailored experiences for your customers. From recommendations to follow-ups, your AI assistant does it all.",
  },
  {
    title: "Seamless Multi-Channel Chatbots",
    description:
      "Engage customers wherever they are — from websites to social media — with chatbots that sound natural and know your business inside out.",
  },
  {
    title: "Healthcare Scheduling",
    description:
      "Handle appointment booking, rescheduling, and patient reminders with ease. AI makes healthcare scheduling efficient and error-free.",
  },
  {
    title: "Smart Data Insights",
    description:
      "Transform raw data into actionable insights with AI-powered analytics. Visualize trends, predict outcomes, and make decisions with confidence.",
  },
];

const FeatureHighlights = () => {
  return (
    <div className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='bg-[#0f0f2f]/50 border-gray-800 hover:border-[#5355d1] transition-all duration-500 ease-out'
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className='p-6'>
                <h3 className='text-lg font-medium text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-gray-400'>{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
